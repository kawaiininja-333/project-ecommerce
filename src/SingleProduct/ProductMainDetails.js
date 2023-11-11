import React, { useState } from "react";
import FormatPrice from "../Helper/FormatPrice";
import Rating from "@mui/material/Rating";
import Size from "./Size";
import ProductColors from "../components/ProductColors";
import { Button } from "@mui/material";
import Quantity from "../components/Quantity";
import { Link } from "react-router-dom";
import AddToCart from "../components/AddToCart/AddToCart";
import Footer from "../components/Footer";
// import GetUserDetails from "../components/userDetails/GetUserDetails";

const ProductMainDetails = ({ product, user, quantity }) => {
  const [setretriveproductQuantity] = useState({
    product_id: "",
    email: "",
    quantity: 1,
  });

  const handleQuantityChange = (newQuantity) => {
    const parsedCart = {
      product_id: product.id,
      email: user.email,
      quantity: newQuantity,
    };

    setretriveproductQuantity(parsedCart);
  };

  // console.log("~ file ~ productMainDeatails.js ~ line ~ 29 ~ quantity =>", quantity);

  return (
    <div className="ProductMainDetails--container">
      <section className="ProductMainDetails--NameSection">
        <h2>
          {product.name}
          <span className="productShow--Rating">
            <Rating name="read-only" value={product.rating} readOnly /> <p>{product.rating}00</p>
          </span>
        </h2>
      </section>
      <section className="ProductMainDetails--Price-Section">
        <div className="ProductMainDetails--Price-detail">
          <div className="ProductMainDetails--Price--container">
            <p className="ProductMainDetails--Price">
              <FormatPrice price={product.price} />
            </p>
            <p className="ProductMainDetails--discount">{product.discount > 0 && product.discount + "% off"} </p>
          </div>
          {product.MRP !== product.price && (
            <p className="ProductMainDetails--MRP">
              M.R.P.:{" "}
              <s>
                <FormatPrice price={product.MRP} currency={"USD"} />
              </s>
            </p>
          )}
          {product.EMI > 0 && (
            <p className="ProductMainDetails--EMI">
              <b>EMI</b> starts at <FormatPrice price={product.EMI} currency={"USD"} />. {product.EMItype}
            </p>
          )}
        </div>
        <div className="ProductMainDetails--AddbuttonCArt_buy">
          <div className="ProductMainDetails--stock">
            {/* <Quantity stock={product.stock} /> */}
            <Quantity stock={product.stock} onQuantityChange={handleQuantityChange} />
          </div>
          <AddToCart getProduct_id={product.id} getQuantity={quantity} />
          <Link className="ProductMainDetails--productLinks" addres={user.address} to={`/product/${product.id}/detail/${user.email}/${user.name}/${product.label}/${product.brand}/${quantity}/purchese`}>
            <Button className="ProductMainDetails--Containerbutton" variant="contained">
              Buy Now
            </Button>
          </Link>
        </div>
      </section>
      {product.size && (
        <section className="ProductMainDetails--Sizecontainer">
          <h3>Size</h3>
          <div className="ProductMainDetails--Size-Card">
            <Size size={product.size} />
          </div>
        </section>
      )}
      {product.colour && (
        <section className="ProductMainDetails--Colourcontainer">
          <h3>Colors</h3>
          <div className="ProductMainDetails--Size-Card">
            <ProductColors color={product.colour} />
          </div>
        </section>
      )}
      <section className="ProductMainDetails--Deatails">
        <h3>Product Details</h3>
        <div className="ProductMainDetails--detailsAlldataContainer">
          <div className="ProductMainDetails--productDetails" dangerouslySetInnerHTML={{ __html: product.about }} style={{ textAlign: "left" }}></div>
        </div>
      </section>
    </div>
  );
};

export default ProductMainDetails;
