// ShowSingleProduct.js
import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/productContext";
import { NavLink, useParams } from "react-router-dom";
import ImageGallery from "./ImagesGallery/ImageGallery";
import ProductInfo from "./ProductInfo";
import ProductRecomendition from "../components/ProductRecomendition";
import UserRating from "../components/UserRating";
import AllUserRatings from "../components/AllUserRatings";
import Footer from "../components/Footer";
import logo from "../logo.png";
import Search from "../components/Search";

const ShowSingleProduct = (props) => {
  const { getSingleProduct, singleProduct } = useProductContext();
  const { id } = useParams();

  const productID = parseInt(id, 10);

  const { image } = singleProduct;

  useEffect(() => {
    getSingleProduct(productID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productID]);

  // console.log("ShowSingleProduct ~~ file line 15 ===", id, getSingleProduct);

  // console.log("ShowSingleProduct ~~ file line 23 ===", props.token);
  // Product review
  const [openRatingBox, setopenRatingBox] = useState(false);

  const openReview = () => {
    setopenRatingBox(true);
  };
  const handeChangeS = () => {
    setopenRatingBox(false);
  };
  let rateclassName = "closeReview";
  if (openRatingBox) {
    rateclassName = "openReview";
  }
  return (
    <>
      <div className="App-Main-Product-Tab-container">
        <div className="ShowSingleProduct--Navbar">
          <NavLink className={"showsingleProduct--navlink"} to={"/"}>
            <div className="logo-container">
              <img className="main-logo" src={logo} alt="Shopping-logo" />
              <p>Kawaii</p>
            </div>
          </NavLink>
          <div className="showsingleProduct--search--control">
            <Search />
          </div>
        </div>
        <div className="ShowSingleProduct--Wrapper">
          <section className="ShowSingleProduct--Main--section">
            <div className="ShowSingleProduct--ImageContainer">
              <ImageGallery image={image} />
            </div>
            <div className="ShowSingleProduct--Detailscontainer">
              <ProductInfo token={props.token} />
            </div>
          </section>
          <section className="ShowSingleProduct--Second--section">
            <h2>Other Product with same Brand</h2>
            <div className="ShowSingleProduct--second-scrollControl">
              <ProductRecomendition />
            </div>
          </section>
          <section className="ShowSingleProduct--Third--section">
            <h2>Review</h2>
            <div className="ShowSingleProduct--second-Review">
              <button className="onHover_R" onClick={openReview}>
                Post review
              </button>
              <div className={rateclassName}>
                <UserRating />
                <button className="Cancle_review_btn" onClick={handeChangeS}>
                  Cancle
                </button>
              </div>
              <div className="AllUserreview">
                <AllUserRatings />
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ShowSingleProduct;
