// ImagePrivew.js
import React from "react";
import products from "./productsData";
import phones from "../Product/Phone";

function ImagePrivew({ numericId, ImageOpen }) {
  const numericProductId = parseInt(numericId, 10);
  const product = phones.find((p) => p.id === numericProductId);

  if (ImageOpen) {
    return (
      <>
        <div className="ProductimagePriviewControl">
          {product.imagess.map((image, index) => (
            <img className="ProductimagePriview" key={index} src={image} alt={product.name} />
          ))}
        </div>
      </>
    );
  }
}

export default ImagePrivew;
