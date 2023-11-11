// Product.js
import React from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";
import Rating from "@mui/material/Rating";
import ProductColors from "./ProductColors";

const ProductShow = (curElem) => {
  const { id, name, image, price, MRP, rating, label, ModelName, discount, colour, deliveryDate } = curElem;
  const [value] = React.useState(rating);

  // console.log("~ file ~ ProductShow ~ line ~ 11 ~ => curElem", curElem.name);

  if (curElem) {
    return (
      <div className="container-display-show-ProductS">
        <Link className="productLinks--ShowSingle" to={`/product/${id}/${label}/${ModelName}/in=view/detail`}>
          <div className="product-image-Poster">
            <img className="productShow-image" src={image} alt={name} />
          </div>
          <div className="productShow--ProductDetails">
            <h4 className="productShow--name">{name}</h4>
            <span className="productShow--Rating">
              <Rating name="read-only" value={value} readOnly /> <p>{value}00</p>
            </span>
            <p className="productShow--price">
              <span className="productShow--formateprice">
                <FormatPrice price={price} currency={"USD"} />
              </span>
              {price !== MRP && (
                <span className="productShow--productMRP">
                  M.R.P:{" "}
                  <s>
                    <FormatPrice price={MRP} currency={"USD"} />
                  </s>
                  <span>{discount}% off</span>
                </span>
              )}
            </p>
            <div className="productShow--DeleveryOpt">
              <p>Get it By: - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
              <p> {deliveryDate} Delevery</p>
            </div>
            <div className="Productshow--ColourPallet--productshow">
              <ProductColors color={colour} />
            </div>
          </div>
        </Link>
      </div>
    );
  }
};

export default ProductShow;
