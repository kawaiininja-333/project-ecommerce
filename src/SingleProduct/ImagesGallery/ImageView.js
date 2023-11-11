import React from "react";
import { useProductContext } from "../../context/productContext";

const ImageView = ({ image }) => {
  const { CurrentprivewImage } = useProductContext();
  // console.log(CurrentprivewImage);

  return (
    <div className="ImageView--container">
      <img src={CurrentprivewImage ? CurrentprivewImage.Imagess : image} alt="Preview" />
    </div>
  );
};

export default ImageView;
