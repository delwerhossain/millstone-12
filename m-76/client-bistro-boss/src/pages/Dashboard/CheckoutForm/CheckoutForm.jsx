import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Payment from "../../../components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";



const stripePromise = loadStripe(import.meta.env.VITE_Payment);
const CheckoutForm = () => {
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
          <Payment/>
          </Elements>
    </>
  );
};

export default CheckoutForm;
