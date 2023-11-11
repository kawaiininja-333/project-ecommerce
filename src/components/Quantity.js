import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/productContext";

function Quantity({ stock }) {
  const { setQuantity } = useProductContext();

  let inputType = "hidden";
  let value = "MAX";
  let showMaxBtn = ["showMaxBtn"];
  const [totalQuantity, setTotalQuantity] = useState(1);

  useEffect(() => {
    setQuantity(totalQuantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalQuantity]);

  // Use the getTotalQuantity function to get the total quantity

  const incressMent = () => {
    if (stock !== totalQuantity) {
      setTotalQuantity(totalQuantity + 1);
    }
  };

  const decressMent = () => {
    if (totalQuantity > 1) {
      setTotalQuantity(totalQuantity - 1);
    }
  };

  const maxQuantity = () => {
    if (value === "MAX") {
      setTotalQuantity(stock);
    } else {
      setTotalQuantity(1);
    }
  };

  if (totalQuantity >= stock - 10) {
    value = "MIN";
  }

  if (totalQuantity > 6) {
    inputType = "button";
  }

  if (inputType === "button") {
    showMaxBtn.push("active");
  }

  const classNames = showMaxBtn.join(" ");
  return (
    <>
      <div className="quantityContainer">
        <button onClick={decressMent} className="minus">
          <i className="fa-solid fa-minus"></i>
        </button>
        <input className="quantityInput" value={totalQuantity} readOnly />
        <button onClick={incressMent} className="plus">
          <i className="fa-solid fa-plus"></i>
        </button>
        <input type={inputType} value={value} onClick={maxQuantity} className={classNames} />
      </div>
    </>
  );
}

export default Quantity;
