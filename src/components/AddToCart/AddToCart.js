import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useProductContext } from "../../context/productContext";

function AddToCart({ getProduct_id, getQuantity }) {
  const { getSingleProduct, singleProduct } = useProductContext();

  useEffect(() => {
    getSingleProduct(getProduct_id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProduct_id]);

  const [quantity, setQuantity] = useState(1); // Initialize quantity to 0
  const [isXcartAdded, setisXcartAdded] = useState(false);

  // Use useEffect to update the quantity state when getQuantity prop changes
  useEffect(() => {
    setQuantity(getQuantity);
  }, [getQuantity]);
  const AddToUserCart = () => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5003/cart",
      data: {
        email: localStorage.getItem("email"),
        product_id: singleProduct.id,
        quantity: quantity,
        price: singleProduct.price,
      },
    })
      .then((response) => {
        console.log(response.data);
        setisXcartAdded(true);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };
  return (
    <Button onClick={AddToUserCart} className="cartBtn" variant="contained">
      {!isXcartAdded ? "Add to Cart" : <p>Added</p>}
    </Button>
  );
}

export default AddToCart;
