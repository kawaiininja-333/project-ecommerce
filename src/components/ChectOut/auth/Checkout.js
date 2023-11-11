import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./Payment";

const stripePromise = loadStripe("pk_test_51O6YejSBjMOWZPn3yUWd3pwtNrsgwzjGrETze3U5iCjw2zn5Mvex1Hywo3B0nZCuk2K8n2f3eyUAPG8aeEpRQb2p00l2QHR9P2");

function Checkout() {
  return (
    <div className="Checkout">
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

export default Checkout;
