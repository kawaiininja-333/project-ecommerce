// SinglrProduct.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "./components/productsData";
import { Link } from "react-router-dom";
import ImagePrivew from "./components/ImagePrivew";
import ProductOffers from "./components/ProductOffers";
import ProductPurchase from "./components/ProductPurchase";
import ProductRecomendition from "./components/ProductRecomendition";
import axios from "axios";
import UserRating from "./components/UserRating";
import AllUserRatings from "./components/AllUserRatings";

function SinglrProduct(props) {
  // retrive data from data base
  const [profileData, setProfileData] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const email = localStorage.getItem("email");

  function getUsers() {
    axios({
      method: "GET",
      url: `http://127.0.0.1:5001/profile_details/${email}`,
      headers: {
        Authorization: "Bearer " + props.token,
      },
    })
      .then((response) => {
        const res = response.data;
        res.access_token && props.setToken(res.access_token);
        setProfileData({
          profile_name: res.name,
          profile_email: res.email,
          profile_phone: res.phone,
          profile_address: res.address,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  // image handeling
  const [image, setimage] = useState(false);
  const handelClick = () => {
    setimage(!image);
  };
  if (image) {
    var classnames = "closeBtn";
  }
  const { id } = useParams();
  const numericId = parseInt(id, 10);

  const product = products.find((p) => p.id === numericId);

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

  if (!product) {
    return (
      <>
        <p>Product not found</p>
        <Link className="productLinks" to={`/`}>
          Home
        </Link>
        ;
      </>
    );
  } else {
    return (
      <>
      {/* Close Image Privew*/}
        <div className="buttonDisplayNone">
          <button onClick={handelClick} className={classnames}>
            X
          </button>
        </div>
        <ImagePrivew numericId={numericId} ImageOpen={image} />
        <div className="ProductTabs">
          <div className="linkHome">
            <Link className="productLinksS" to={`/`}>
              <i className="fa-solid fa-arrow-left">
                <span>Back</span>
              </i>
            </Link>
          </div>
          <div className="ProductItem">
            <div className="ProductImageScroll">
              {product.imagess.map((image, index) => (
                <img onClick={handelClick} className="Productimage" key={index} src={image} alt={product.name} />
              ))}
            </div>
            <div className="ProductDetailControl">
              <div className="ProduckDetailCard">
                <div className="ProductDetailinfo">
                  <div className="Name">
                    <h3>{product.name}</h3>
                  </div>
                  <div className="Short">
                    <p>{product.short}</p>
                  </div>
                </div>
                <div className="ProductDetailPriceInfo">
                  <div className="Discount">
                    <p> {product.discount}</p>
                  </div>
                  <div className="Price">
                    <p> ${product.price}</p>
                  </div>
                  <div className="Price">
                    <p> ${product.productChart}</p>
                  </div>
                  <div className="OriginalRate">
                    <p>
                      M.R.P.: <s>{product.originalPrice}</s>
                    </p>
                  </div>
                  <div className="ProductInfoTax">
                    <p>Inclusive of all taxes</p>
                  </div>
                  <div className="ProductEMICard">
                    <p className="EMI">EMI</p>
                    <span className="EMIInfo">{product.EMI}</span>
                    <a href="#Home">EMI options </a>
                  </div>
                </div>

                <ProductOffers numericId={numericId} />
              </div>
              {/* product Purches info */}
              <div className="ProductLastInfoCard">
                <ProductPurchase name={profileData.profile_name} address={profileData.profile_address} numericId={numericId} />
              </div>
            </div>
          </div>
          <div className="ProductDetailsAbout">
            <span>Product details</span>
            <p className="discription">{product.description}</p>
            <p className="about">{product.about}</p>
          </div>
        </div>
        <div className="ProductRecomenditionContainer">
          <p>Products related </p>
          <div className="Recomendition">
            <ProductRecomendition numaricId={product} />
          </div>
        </div>
        <div className="ratingContainer">
          <p>Ratings</p>
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
      </>
    );
  }
}

export default SinglrProduct;

// const customStyle_btn = {
//   borderRadius: "2px",
//   border: "1px solid",
//   padding: "5px",
//   color: "rgb(255, 213, 0)",
//   transition: "background-color 0.3s",
// };
