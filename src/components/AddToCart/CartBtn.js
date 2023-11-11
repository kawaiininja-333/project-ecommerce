import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CartBtn({ getusercart }) {
  const totalCatrItem = getusercart;
  const [cartCount] = useState(parseInt(totalCatrItem, 10));
  const [widthSize, setWidthSize] = useState("25px");
  const [heightSize, setHeightSize] = useState("25px");
  const [borderRad, setBorderRad] = useState("100%");
  const [displayShow, setdisplayShow] = useState("none");
  const [fontsize, setfontsize] = useState("12px");

  useEffect(() => {
    // Adjust size and border radius based on cartCount
    if (cartCount > 0) {
      setdisplayShow("block");
      if (cartCount < 99) {
        setfontsize("16px");
      }
      if (cartCount > 99) {
        setWidthSize("30px");
        setHeightSize("20px");
        setBorderRad("16%");
      } else {
        setWidthSize("25px");
        setBorderRad("100%");
      }
    } else {
      setfontsize("11px");
    }
  }, [cartCount]);

  console.log(getusercart);

  return (
    <Link className="CartBtn--links" to="/cart">
      <i className="fa-solid fa-bag-shopping"></i>
      <span className="cart_count" style={{ display: displayShow, width: widthSize, height: heightSize, borderRadius: borderRad, fontSize: fontsize }}>
        {cartCount}
      </span>
    </Link>
  );
}

export default CartBtn;
