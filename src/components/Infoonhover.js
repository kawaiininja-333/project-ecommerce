import React, { useState } from "react";

function Infoonhover({ info_message, infoclassname }) {

  const [onHover, setonHover] = useState(false);
  const showInfo = () => {
    setonHover(true);
    console.log(onHover);
  };
  const setshowInfo = () => {
    setonHover(false);
    console.log(onHover);
  };
  let message;
  let classesName;
  if (onHover) {
    message = info_message;
    classesName = infoclassname 
  }
  return (
    <div className="form_info" onMouseOver={showInfo} onMouseOut={setshowInfo}>
      <span className="info_i">
        i<span className={classesName}>{message}</span>
      </span>
    </div>
  );
}

export default Infoonhover;
