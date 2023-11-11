import React, { useEffect, useState } from "react";
import { useProductContext } from "../../context/productContext";
import { useParams } from "react-router-dom";

const ImagePreview = () => {
  const [hoveredInfo, setHoveredInfo] = useState(null);

  const { getSingleProduct, singleProduct, getSinglePreviewImage } = useProductContext();
  const { id } = useParams();

  const productID = parseInt(id, 10);

  const { imagess, name } = singleProduct;

  const handleHoverEnter = (imageInfo) => {
    setHoveredInfo(imageInfo);
    // console.log("Hovered image info: ", imageInfo);
  };

  useEffect(() => {
    getSingleProduct(productID);
    getSinglePreviewImage(hoveredInfo);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoveredInfo, productID]);

  return (
    <div className="ImagePreview--Container">
      {imagess ? (
        imagess.map((curImg, index) => (
          <div key={index} className="ImagePreview--Container-imagess" onMouseEnter={() => handleHoverEnter({ Imagess: curImg })}>
            <img src={curImg} alt={`${name}`} />
          </div>
        ))
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default ImagePreview;
