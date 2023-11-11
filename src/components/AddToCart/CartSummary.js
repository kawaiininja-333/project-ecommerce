import React, { useEffect, useState } from "react";
import FormatPrice from "../../Helper/FormatPrice";
import { NavLink } from "react-router-dom";
import { useUserProfile } from "../../context/userProfileContext";

function CartSummary({ getCartItem }) {
  const { user } = useUserProfile();

  const [retrievedDataPrice, setRetrievedDataPrice] = useState({
    price: 0,
    quantity: 0,
    name: "",
  });

  // console.log(retrievedDataPrice);
  // console.log(getCartItem);

  useEffect(() => {
    handleCartPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCartItem]);

  const handleCartPrice = () => {
    if (Array.isArray(getCartItem)) {
      const totalPrice = getCartItem.reduce((total, item) => total + item.price * item.quantity, 0);
      const totalQuantity = getCartItem.reduce((total, item) => total + item.quantity, 0);
      const itemName = getCartItem.name;

      setRetrievedDataPrice({
        price: totalPrice,
        quantity: totalQuantity,
        name: itemName,
      });
    }
  };

  return (
    <div className="CartSummary">
      <div className="CaRTsUMMARYdETAILS">
        <div className="TotalItems">
          <p>ITEMS {getCartItem.length}</p>
          <p>
            <FormatPrice price={retrievedDataPrice.price} currency={"USD"} />
          </p>
        </div>
        <div className="TotalItems">
          <p>Shipping Fee</p>
          <p>{retrievedDataPrice.price > 1000 ? <FormatPrice price={0} currency={"USD"} /> : <FormatPrice price={70} currency={"USD"} />}</p>
        </div>
        <div className="TotalItems">
          <p>Total Quantity: </p>
          <p>{retrievedDataPrice.quantity}</p>
        </div>
      </div>
      <NavLink to={`/purchese/${user.name}/${user.email}/checkout`}>
        <div className="Chectout_CartBtn_BAg">
          <button>
            Check Out <FormatPrice price={retrievedDataPrice.price} currency={"USD"} />
          </button>
        </div>
      </NavLink>
    </div>
  );
}

export default CartSummary;
