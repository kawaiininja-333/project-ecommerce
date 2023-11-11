import React from "react";
import { Link } from "react-router-dom";

function RecomendCards({ product }) {
  const shortDisLength = product.about.length;
  if (shortDisLength > 35) {
    var symbol = "...";
  }

  const reload = () => {
    window.location.reload();
  };
  return (
    <div className="RecomendItems" onClick={reload}>
      <Link className="RecomendproductLinks" to={`/product/${product.id}/detail`}>
        {/* Use Link to navigate to the product detail page */}
        <div className="Recomendproduct-image-cover">
          <img className="Recomendproduct-image" src={product.image} alt={product.name} />
        </div>
        <div className="RecomendproductDetail-cover">
          <h4 className="Recomendproducts-details product-name">{product.name}</h4>
          <p className="Recomendproducts-details product-short">{product.about.slice(0, 55) + symbol}</p>
          <p className="Recomendproducts-details product-price">
            <span className="Recomendprice">${product.price}</span>{" "}
            <span className="Recomendproduct-discount">
              <span className="Recomenddiscount">offer {product.discount}</span>
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default RecomendCards;
