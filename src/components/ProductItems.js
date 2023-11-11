import React from "react";
import ProductShow from "./ProductShow";

const ProductItems = ({ products }) => {
  return (
    <div>
      <div className="Product-show-first-container">
        {products.map((curElem) => {
          return <ProductShow key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default ProductItems;
