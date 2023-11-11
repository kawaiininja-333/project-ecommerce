import React from "react";
import { Link } from "react-router-dom";
import CartBasket from "./AddToCart/CartBasket";

function Navbar() {
  return (
    <div className="navbar">
      <div className="tabs">
        <Link className="links" to="/">
          Home
        </Link>
      </div>
      <div className="tabs">
        <Link className="links" to="/category">
          Catogery
        </Link>
      </div>
      <div className="tabs">
        {/* <Link className="links" to="/support">
          Support
        </Link> */}
      </div>
      <div className="Cart">
        <CartBasket />
      </div>
    </div>
  );
}

export default Navbar;
