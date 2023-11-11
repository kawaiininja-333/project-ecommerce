import React from "react";
import ImagePreview from "./ImagePreview";
import ImageView from "./ImageView";

const ImageGallery = ({ image }) => {
  return (
    <div className="ImageGallery--container">
      <ImagePreview />
      <ImageView image={image} />
    </div>
  );
};

export default ImageGallery;
