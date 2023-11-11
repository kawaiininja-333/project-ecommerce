import axios from "axios";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
// import { useUserProfile } from "../../context/userProfileContext";
// import { useProductContext } from "../../context/productContext";

function Cart() {
  const Gmail = localStorage.getItem("email");
  const [getCartItem, setgetCartItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const { getSingleProduct, singleProduct } = useProductContext();
  // const {}

  // console.log("~ file ~ cart.js ~ line ~ 16 ~ => ", getCartItem);

  useEffect(() => {
    getUserCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getUserCart() {
    axios({
      method: "GET",
      url: `http://127.0.0.1:5003/cart/${Gmail}`,
    })
      .then((response) => {
        const parsedCart = response.data.map((item) => ({
          id: item.cart.id,
          product_id: item.cart.product_id,
          email: item.cart.email,
          quantity: item.cart.quantity,
          user_id: item.cart.user_id,
          price: item.cart.price,
        }));
        const mergedCart = [];
        parsedCart.forEach((item) => {
          const existingItemIndex = mergedCart.findIndex((i) => i.product_id === item.product_id);
          if (existingItemIndex !== -1) {
            mergedCart[existingItemIndex].quantity += item.quantity;
          } else {
            mergedCart.push(item);
          }
        });
        setgetCartItem(mergedCart);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          console.log("error", error.response);
        }
        setIsLoading(false);
      });
  }

  // Remove from cart Animation and Remove
  const toggleRemoveFromCart = (cartItemId) => {
    // Toggle the "removeFromCart" state for the specified cart item
    const updatedCart = getCartItem.map((cartItem) => {
      if (cartItem.id === cartItemId) {
        return {
          ...cartItem,
          removeFromCart: !cartItem.removeFromCart,
        };
      }
      return cartItem;
    });
    setgetCartItem(updatedCart);
  };

  // Update the quantity of a cart item based on the product id
  const updateQuantity = (productId, quantity) => {
    // Find the index of the cart item with the given product id
    const index = getCartItem.findIndex((item) => item.product_id === productId);
    // If the cart item exists, update its quantity in the state
    if (index !== -1) {
      // Make a copy of the cart items array
      const newCartItems = [...getCartItem];
      // Update the quantity of the cart item at the index
      newCartItems[index].quantity = quantity;
      // Set the new cart items array as the state
      setgetCartItem(newCartItems);
    }
  };

  if (isLoading) {
    return (
      <div className="App_Loading">
        <div className="App_Loading_child_row">
          <div className="App_Loading_child_row_a"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="cart_container">
        <div className="Cart_container_Box">
          <div className="CartTable">
            <div className="CartTableWrapper">
              <div className="CarttableHeaderMAin">
                <div>
                  <p>Product</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                </div>
              </div>
              <div className="CartControlPQS">
                <div className="CartScrollControl">
                  {getCartItem.length > 0 ? (
                    getCartItem.map((cart, index) => <CartItem key={index} cart={cart} getCartItem={getCartItem} setgetCartItem={setgetCartItem} removeFromCart={cart.removeFromCart} toggleRemoveFromCart={toggleRemoveFromCart} updateQuantity={updateQuantity} />)
                  ) : (
                    <tr>
                      <td colSpan="4">Add some Items.</td>
                    </tr>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="CartTable_checkOut">
            <p>Summary</p>
            <div className="CartSummary_z">
              <CartSummary getCartItem={getCartItem} totalCartValue={"totalCartValue"} />
            </div>
          </div>
        </div>
      </div>
      <div className="AppMobile">Only for lapto and desktop</div>
    </>
  );
}

export default Cart;

// // dfsdfsd

// import React, { useEffect, useState } from "react";

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   // Fetch the cart items from the server and store them in the state
//   useEffect(() => {
//     fetch("http://127.0.0.1:5003/cart")
//       .then((response) => response.json())
//       .then((data) => setCartItems(data));
//   }, []);

//   return (
//     <div className="cart_container">
//       <div className="Cart_container_Box">
//         <div className="CartTable">
//           <div className="CartTableWrapper">
//             <div className="CarttableHeaderMAin">
//               <div>
//                 <p>Product</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Subtotal</p>
//               </div>
//             </div>
//             <div className="CartControlPQS">
//               <div className="CartScrollControl">
//                 {cartItems.length > 0 ? (
//                   cartItems.map((cartItem, index) => (
//                     <CartItem
//                       key={index}
//                       cartItem={cartItem}
//                       updateQuantity={updateQuantity}
//                     />
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4">Add some Items.</td>
//                   </tr>
//                 )}
//               </div>
//             </div>
//           </
