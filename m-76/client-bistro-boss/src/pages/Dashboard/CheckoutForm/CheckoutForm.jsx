import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Payment from "../../../components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCarts from "../../../hooks/useCarts";

const stripePromise = loadStripe(import.meta.env.VITE_Payment);
const CheckoutForm = () => {
  const [cart] = useCarts();
  const total = cart.reduce(
    (accumulator, currentVal) => accumulator + currentVal.price,
    0
  );
  const price = parseFloat(total.toFixed(2));

  return (
    <>
      <Helmet>
        <title>Bistro Boss | All users</title>
      </Helmet>
      <SectionTitle
        subHeading="What's new"
        heading="Add an item"
      ></SectionTitle>
      {/* payment form  */}
      <Elements stripe={stripePromise}>
        <Payment cart={cart} price={price} />
      </Elements>
    </>
  );
};

export default CheckoutForm;
