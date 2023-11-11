// userrating.js
import React, { useEffect, useState, Component } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UserRating() {
  const { id, name, ModelName } = useParams();
  const [value, setValue] = useState("");
  const [showPost, setShowPost] = useState(false);
  const product_id = parseInt(id, 10);
  const rating = parseInt(value, 10);
  let email = localStorage.getItem("email");
  let navigation = useNavigate();
  // handelling review text content

  function handelReviewContent(event) {
    const { value, name } = event.target;
    settextvalue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  useEffect(() => {
    if (value) {
      setShowPost(true);
    } else {
      setShowPost(false);
    }
  }, [value]);

  const [textvalue, settextvalue] = useState({
    title: "",
    content: "",
  });
  const title = textvalue.title;
  const content = textvalue.content;
  console.log("top", textvalue.title);
  const postRatings = () => {
    if (product_id && email) {
      axios({
        method: "POST",
        url: "http://127.0.0.1:5000/rating",
        data: {
          product_id: product_id,
          email: email,
          rate: rating,
          title: title,
          content: content,
        },
      })
        .then((response_data) => {
          console.log("down", textvalue.title);
          console.log(response_data);
          navigation(`/product/${product_id}/${name}/${ModelName}/in=view/detail`);
          window.location.reload();
        })
        .catch((error) => {
          if (error.response) {
            alert("Error");
            console.log(error.response);
          }
        });
    } else {
      console.log("product_id or email is missing. Cannot post the rating.");
    }

    setShowPost(false);
  };
  const handeChange = () => {
    setValue(null);
    textvalue.title = "";
    textvalue.content = "";
  };

  return (
    <>
      <div>
        <div className="RatingContainer">
          <Box sx={{ "& > legend": { mt: 2 } }}>
            {value ? (
              <Rating className="Ratedstars" name="read-only" value={parseInt(value, 10)} readOnly />
            ) : (
              <>
                <Rating
                  className="Ratedstars"
                  name="simple-controlled"
                  value={parseInt(value)}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </>
            )}
          </Box>
          {!value && (
            <div className="textContent">
              <input className="title" onChange={handelReviewContent} name="title" placeholder="title" />
              <textarea className="textarea" onChange={handelReviewContent} name="content"></textarea>
            </div>
          )}
          {value && textvalue.title && textvalue.content && (
            <div className="textTc">
              <input readOnly value={textvalue.title} className="titlex" />
              <textarea className="textareax" readOnly>
                {textvalue.content}
              </textarea>
            </div>
          )}

          <div className="RateEdtibuttons">
            {showPost && <button onClick={postRatings}>Save</button>}
            {value && <button onClick={handeChange}>edit</button>}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRating;
