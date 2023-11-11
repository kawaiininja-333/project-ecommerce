import React from "react";
import { useParams } from "react-router-dom";
import products from "../../productsData";

function CheckoutProduct() {
  const { id } = useParams();

  const product_id = parseInt(id, 10);

  const product = products.find((p) => p.id === product_id);

  return <div>{product.name}</div>;
}

export default CheckoutProduct;
