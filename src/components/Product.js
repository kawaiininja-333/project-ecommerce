// Product.js
import React from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";

function Product({ product }) {
  const shortDisLength = product.description.length;
  if (shortDisLength > 35) {
    var symbol = "...";
  }

  const reload = () => {
    window.location.reload();
  };
  return (
    <div className="items" onClick={reload}>
      <Link className="Product--productLinks" to={`/product/${product.id}/${product.label}/${product.ModelName}/in=view/detail`}>
        <div className="Product--Card--container">
          <div className="product-image-cover">
            <img className="product-image" src={product.image} alt={product.name} />
          </div>
          <div className="product--item--details">
            <h4 className="products-details product-name">{product.tag}</h4>
            <div className="product--APDM">
              <p className="product--Description">{product.description.slice(0, 60) + symbol}</p>
              <div className="products--Price-info">
                <span className="price">
                  <FormatPrice price={product.price} currency={"USD"} />
                </span>{" "}
                {product.MRP !== product.price && (
                  <span className="product--MRP">
                    <span className="product--discount"> {product.discount + "%"} off </span>
                    <span className="product---MRP">
                      MRP{" "}
                      <s>
                        <FormatPrice price={product.MRP} currency={"USD"} />
                      </s>{" "}
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
