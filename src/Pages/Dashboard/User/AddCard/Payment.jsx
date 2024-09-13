
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISHABLE_KEY);
console.log(stripePromise);
const Payment = () => {
     const property = useLoaderData()
     return (
          <div>
                 <div>
             
               <Elements stripe={stripePromise}>
                   <PaymentForm property={property} ></PaymentForm>
               </Elements>

          </div>
          </div>
     );
};

export default Payment;