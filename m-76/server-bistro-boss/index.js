const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(process.env.payment_secret);

// middleware
app.use(cors());
app.use(express.json());

// jwt verification
const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log(authorization);
  if (!authorization) {
    return res
      .status(403)
      .send({ error: true, message: "unauthorized access" });
  }
  // bearer token
  const token = authorization.split(" ")[1];

  // verify a token symmetric
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ error: true, message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@simple-del.4ijtj0g.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const userCollection = client.db("bistroDB").collection("user");
    const menuCollection = client.db("bistroDB").collection("menu");
    const reviewCollection = client.db("bistroDB").collection("reviews");
    const cartCollection = client.db("bistroDB").collection("carts");
    const paymentCollection = client.db("bistroDb").collection("payments");

    //JWT
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: "1h",
      });

      res.send({ token });
    });

    // admin for all users
    app.get("/users", async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });

    //user api
    app.post("/users", async (req, res) => {
      const body = req.body;
      const query = { email: body.email };
      const existing = await userCollection.findOne(query);
      if (existing) {
        return res.send({ massage: "existing" });
      }
      const result = await userCollection.insertOne(body);
      res.send(result);
    });

    // user to admin

    app.patch("/users/admin/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          role: "admin",
        },
      };
      const result = await userCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // menu api
    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });
    // menu api post
    // app.post("/menu", async (req, res) => {
    //   const body = req.body;
    //   console.log(body);
    //   const result = await menuCollection.insertOne(body);
    //   res.send(result);
    // });

    app.post("/menu", async (req, res) => {
      const item = req.body;
      console.log(item);
      const result = await menuCollection.insertOne(item);
      res.send(result);
    });

    app.delete("/menu/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await menuCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });

    app.get("/carts", async (req, res) => {
      const email = req.query.email;
      // console.log(email);
      if (!email) {
        res.send([]);
      }
      // const decodedEmail = req.decoded.email
      // if (email !== decodedEmail) {
      // res.status(403).send({ error: true, message: "unauthorized access" });
      // }
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/carts", async (req, res) => {
      const body = req.body;
      const result = await cartCollection.insertOne(body);
      res.send(result);
    });

    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    try {
      //payment
      app.post("/create-payment-intent", async (req, res) => {
        const { price } = req.body;
        const amount = price * 100;
        const paymentIntent = await stripe.paymentIntents.create({
          amount: amount,
          currency: "usd",
          payment_method_types: ["card"],
        });

        res.send({
          clientSecret: paymentIntent.client_secret,
        });
      });
    } catch (error) {
      console.log(error);
    }

    // payment related api
    app.post("/pay", async (req, res) => {
      const payment = req.body;
      const insertResult = await paymentCollection.insertOne(payment);

      const query = {
        _id: { $in: payment.cartItems.map((id) => new ObjectId(id)) },
      };
      const deleteResult = await cartCollection.deleteMany(query);

      res.send({ insertResult, deleteResult });
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("boss is sitting");
});

app.listen(port, () => {
  console.log(`Bistro boss is sitting on port ${port}`);
});
