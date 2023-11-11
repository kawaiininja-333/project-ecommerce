import React, { useEffect, useState } from "react";

function CartCurrentQuantity({ basket, Itemquantity, updateQuantity }) {
  let inputType = "hidden";
  let value = "MAX";
  let showMaxBtn = ["showMaxBtn"];
  const [totalQuantity, setTotalQuantity] = useState(Itemquantity);

  const incressMent = () => {
    if (basket.stock !== totalQuantity) {
      setTotalQuantity(totalQuantity + 1);
    }
  };

  useEffect(() => {
    updateQuantity(totalQuantity, basket.id); // Pass both the product ID and the new quantity
  }, [basket.id, totalQuantity, updateQuantity]);

  const decressMent = () => {
    if (totalQuantity > 1) {
      setTotalQuantity(totalQuantity - 1);
    }
  };

  const maxQuantity = () => {
    if (value === "MAX") {
      setTotalQuantity(basket.stock);
    } else {
      setTotalQuantity(1);
    }
  };

  if (totalQuantity >= basket.stock - 10) {
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

export default CartCurrentQuantity;
