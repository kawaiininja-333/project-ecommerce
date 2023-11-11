import React, { useEffect, useState } from "react";
import CartBtn from "./CartBtn";
import axios from "axios";

function CartBasket() {
  const Gmail = localStorage.getItem("email");
  const [getCartItem, setgetCartItem] = useState([]);

  useEffect(() => {
    getUserCart();
  }, []);

  function getUserCart() {
    axios({
      method: "GET",
      url: `http://127.0.0.1:5003/cart/${Gmail}`,
    })
      .then((response) => {
        const cartItems = response.data;
        console.log("Received cart items:", cartItems); // Add this line to log the cart items
        const mergedCart = mergeCartItems(cartItems);
        console.log("Merged cart:", mergedCart); // Add this line to log the merged cart
        setgetCartItem(mergedCart);
      })
      .catch((error) => {
        if (error.response) {
          console.log("error", error.response);
        }
      });
  }

  function mergeCartItems(cartItems) {
    const merged = [];
  
    for (const item of cartItems) {
      const existingItemIndex = merged.findIndex((mergedItem) => mergedItem.product_id === item.cart.product_id);
  
      if (existingItemIndex !== -1) {
        // If an item with the same product_id exists, merge the quantities
        merged[existingItemIndex].cart.quantity += item.cart.quantity;
      } else {
        // If the item doesn't exist in the merged cart, add it
        merged.push(item);
      }
    }
  
    return merged;
  }
  

  return getCartItem.length > 0 ? <CartBtn getusercart={getCartItem.length} /> : null;
}

export default CartBasket;
