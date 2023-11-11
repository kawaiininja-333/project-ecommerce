import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentCompletion() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <>
      <div className="payment_raw_compition">
        <div className="logo_done"><i class="fa-solid fa-fan"></i><i class="fa-solid fa-fan"></i><i class="fa-solid fa-check"></i></div>
        <div className="payment_done">Payment Done</div>
      </div>
    </>
  );
}

export default PaymentCompletion;
