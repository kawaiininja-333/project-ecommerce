import React from "react";
import FormatPrice from "../Helper/FormatPrice";

const Size = ({ size }) => {
  console.log("~file ~ size.js ~ ~ line 4", size);
  return (
    <div className="Size--container">
      {size.map((size, index) => (
        <div key={index} className="Size--details">
          <p>{size.size}</p>
          <p>
            <FormatPrice price={size.price} currency={"USD"} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default Size;
