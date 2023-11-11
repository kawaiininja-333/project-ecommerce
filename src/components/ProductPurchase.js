import React, { useState } from "react";
import { Button } from "@mui/material";
import products from "./productsData";
import Quantity from "./Quantity";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart/AddToCart";

function ProductPurchase({ numericId, name, address }) {
  const email = localStorage.getItem("email");

  const ProductId = parseInt(numericId, 10);
  const product = products.find((p) => p.id === ProductId);
  const [getCartItem, setgetCartItem] = useState([]);
  const [retriveproductQuantity, setretriveproductQuantity] = useState({
    product_id: "",
    email: "",
    quantity: 1,
  });

  const handleQuantityChange = (productId, newQuantity) => {
    // Find the product in the cart based on productId
    const parsedCart = {
      product_id: numericId,
      email: email,
      quantity: newQuantity, // Use the new quantity value
    };
    const updatedCart = getCartItem.map((cartItem) => {
      if (cartItem.product_id === productId) {
        return {
          ...cartItem,
          quantity: parseInt(newQuantity, 10),
        };
      }
      return cartItem;
    });
    setretriveproductQuantity(parsedCart);

    setgetCartItem(updatedCart);
  };

  return (
    <div className="ProductLastcardContainer">
      <div className="productDetailPrice">
        <div className="Price">
          <p>
            ${product.price} <span>.00</span>
          </p>
        </div>
        <div className="ProductDelivery">
          <p className="delivery">{product.delivery}</p>
          <p className="deliveryDate">{product.deliveryDate}</p>
        </div>
        <div className="ProductDeliveryAddress">
          <p>
            Deliver to {name} - {address}
          </p>
        </div>
        <div className="clientDetails">
          Sold by <span>{product.clientName}</span>.
        </div>
      </div>
      <div className="quantitySet">
        <Quantity numaricId={ProductId} onQuantityChange={handleQuantityChange} />
      </div>
      <div className="ProductClassComponent">
        <AddToCart getProduct_id={ProductId} getQuantity={retriveproductQuantity.quantity} />

        <Link className="productLinks" addres={address} to={`/product/${product.id}/detail/${email}/${name}/${product.name}/${product.short}/${retriveproductQuantity.quantity}/purchese`}>
          <Button className="buyBtn" variant="contained">
            Buy Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProductPurchase;
