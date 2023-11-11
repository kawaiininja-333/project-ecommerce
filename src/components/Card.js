import React from "react";

function Card(props) {
  const { children, classname } = props;
  return <div className={classname}>{children}</div>;
}

export default Card;
