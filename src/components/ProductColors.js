import React from "react";

const ProductColors = ({ color }) => {
  return (
    <>
      {color
        ? color.map((Allclor, index) => (
            <div key={index} className="productShow--Pallet">
              <div style={{ backgroundColor: Allclor, height: "100%", width: "100%" }}></div>
            </div>
          ))
        : ""}
    </>
  );
};

export default ProductColors;
