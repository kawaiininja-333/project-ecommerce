import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Notification from "./Notification";
import { useNavigate, useParams } from "react-router-dom";

export default function PaymentForm() {
  let notificationIS;
  let user_email = localStorage.getItem("email");
  let gmail = user_email;

  const stripe = useStripe();
  const elements = useElements();
  const [cardName, setCardName] = useState(""); // State to store cardholder's name
  const [cardEmail, setCardEmail] = useState(gmail); // State to store cardholder's email
  const [cardPhonnum, setCardPhonnum] = useState(""); // State to store cardholder's phone number

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Handle the payment submission here

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: cardName, // Cardholder's name
        email: cardEmail, // Cardholder's email
        phone: cardPhonnum, // Cardholder's phone number
      },
    });

    if (error) {
      console.error(error);
      notificationIS = false;
    } else {
      notificationIS = true;
      console.log(paymentMethod);
      navigate("/purchese/paymentdone");
    }
  };

  return (
    <>
      <div className="Checkout_strip_form">
        <div className="notification_container">{notificationIS ? <Notification getData={notificationIS}>done</Notification> : ""}</div>
        <div className="main_payment_check_out_container">
          <div className="checkout_container_raw">
            <form id="checkOutform" onSubmit={handleSubmit}>
              <input className="checkOut_email" type="email" placeholder="Cardholder's Email" value={cardEmail} onChange={(e) => setCardEmail(e.target.value)} />
              <CardElement className="checkOut_cardNumber" />
              <input className="checkOut_CardName" type="text" placeholder="Cardholder's Name" value={cardName} onChange={(e) => setCardName(e.target.value)} />
              <input className="checkOut_Phonenum" type="tel" placeholder="Cardholder's PhoneNum" value={cardPhonnum} onChange={(e) => setCardPhonnum(e.target.value)} />
              <button className="CheckOut_payed" type="submit">
                Pay
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
