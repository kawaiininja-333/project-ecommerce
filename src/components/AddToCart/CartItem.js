import React from "react";
// import CartCurrentQuantity from "./CartCurrentQuantity";
import axios from "axios";
import CombinedProduct from "../../combainProduct/CombinedProduct";
import FormatPrice from "../../Helper/FormatPrice";
import { NavLink } from "react-router-dom";

const combainProduct = CombinedProduct();

function CartItem({ cart, removeFromCart, toggleRemoveFromCart, getCartItem, setgetCartItem, updateQuantity }) {
  const quantity = cart.quantity;
  const price = cart.price;
  const isactive = removeFromCart ? "active" : "inactive";

  const { user_id, product_id } = cart; // Extract the user_id and id properties from the cart object

  const basket = combainProduct.find((p) => p.id === product_id);

  // Create the data object for the DELETE request
  let email = localStorage.getItem("email");
  const requestData = {
    user_id: user_id,
    product_id: product_id,
    email: email,
  };

  const handleRemoveFromCart = () => {
    setTimeout(() => {
      axios
        .delete("http://127.0.0.1:5003/cart/delete", { data: requestData })
        .then((response) => {
          console.log("Response:", response.data);
          const updatedCart = getCartItem.filter((cartItem) => cartItem.id !== cart.id);
          setgetCartItem(updatedCart);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 400);
  };

  console.log(basket);

  // Calculate the subtotal based on the price and quantity
  const subtotal = price * quantity;

  return (
    <div className={`CArtTableHEader  ${isactive}`}>
      <div className="CartTableFirstRowProduct">
        <div className={`RemoveCartBtn`} onClick={() => toggleRemoveFromCart(cart.id)}>
          <i className="fa-regular fa-circle-xmark" onClick={handleRemoveFromCart}></i>
        </div>
        <div className="cartProductImage">
          <img src={basket.image} alt={basket.name} />
        </div>
        <div className="cartProductName">
          <NavLink className="cartProductName" to={`/product/${basket.id}/${basket.label}/${basket.ModelName}/in=view/detail`}>
            {basket.name}
          </NavLink>
        </div>
      </div>
      <div className="CartTablesecondRowProduct">
        <FormatPrice price={price} currency={"USD"} />
      </div>
      <div className="CartTableThirdRowProduct">
        <p>{cart.quantity}</p>
        {/* <CartCurrentQuantity productId={cart.product_id} Itemquantity={} basket={basket} updateQuantity={updateQuantity} /> */}
      </div>
      <div className="CartTableFourthRowProduct">
        <FormatPrice price={subtotal} currency={"USD"} />
      </div>
    </div>
  );
}

export default CartItem;
// onQuantityChange={handleQuantityChange}
