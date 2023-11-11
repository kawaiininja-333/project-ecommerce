import React from "react";
import { useFilterContext } from "../context/filter_context";
import ProductItems from "./ProductItems";

const ProductList = () => {
  const { filter_products } = useFilterContext();

  // console.log("~ file ~ ProductList.js ~ line ~ 8 ~ => ", filter_products.length);

  return <div className="ProductItems-container-law">{filter_products.length > 0 ? <ProductItems products={filter_products} /> : "No product Found"}</div>;
};

export default ProductList;
