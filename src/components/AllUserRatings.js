import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import axios from "axios";
import TimeDifference from "./TimeCalculate";

function AllUserRatings() {
  let loadProductless = "Show More";
  let letloadless = false;
  const { id } = useParams();
  const product_id = parseInt(id, 10);
  const [allRatings, setAllRatings] = useState([]);

  const [loadProduct, setloadProduct] = useState(5);
  const loadMoreProduct = () => {
    if (loadProduct < allRatings.length) {
      setloadProduct(loadProduct + 5);
    }
  };
  if (loadProduct > allRatings.length) {
    loadProductless = "Show Less";
    letloadless = true;
  }

  const loadLessProduct = () => {
    if (letloadless) setloadProduct(5);
  };
  useEffect(() => {
    getProductsRatings();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product_id]);

  function getProductsRatings() {
    if (product_id) {
      axios({
        method: "GET",
        url: `http://127.0.0.1:5000/profile_details/${product_id}`,
      })
        .then((response) => {
          const parsedRatings = response.data.map((rating) => ({
            rate: parseFloat(rating.rating),
            user_name: rating.user_name,
            title: rating.title,
            content: rating.content,
            created_at: rating.created_at,
          }));
          setAllRatings(parsedRatings);
        })
        .catch((error) => {
          if (error.response) {
            console.log("error", error.response);
          }
        });
    }
  }

  return (
    <>
      <div style={customStyle_A} className="alluserRating">
        {Array.isArray(allRatings) && allRatings.length > 0 ? (
          allRatings.slice(0, loadProduct).map((rating, index) => (
            <div className="rat_container_wrap" key={index}>
              <div className="rat_user_info">
                <input className="userName" name={`user-${index}`} defaultValue={"@" + rating.user_name} readOnly />
                <TimeDifference time={rating.created_at} />
                <input type="hidden" name={`time-${index}`} defaultValue={rating.created_at} />
              </div>
              <Box className="rating_star_container" component="fieldset" mb={3} borderColor="transparent">
                <Rating className="Rate_stars" name={`rating-${index}`} defaultValue={parseFloat(rating.rate)} readOnly />
              </Box>
              {rating.content && (
                <div className="rate_content_text_container">
                  <input name={`title-${index}`} defaultValue={rating.title} readOnly />
                  <p>{rating.content} </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>No ratings available.</div>
        )}
      </div>
      {allRatings.length > 5 && (
        <div style={customStyle} className="LoadProduct">
          <span className="LoadBorder">
            <button className="LoadProductBtn" onClick={letloadless ? loadLessProduct : loadMoreProduct}>
              {loadProductless}
            </button>
          </span>
        </div>
      )}
    </>
  );
}
export default AllUserRatings;

const customStyle = {
  position: "relative",
  top: "0px",
  background: "linear-gradient(to bottom, rgba(128, 126, 126, 0), rgba(0, 0, 0, 0.6))",
  borderBottomRadius: "60px",
};
const customStyle_A = {
  paddingTop: "30px",
  paddingBottom: "30px",
};
