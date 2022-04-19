import React from "react";

const ScrollContDiv = (props) => {
  return (
    <div
      className="horizontalColItem"
      style={{ backgroundColor: `${props.colour}` }}
      data-text={props.text}
      data-colour={props.colour}
      onClick={props.getColourInfo}
    ></div>
  );
};
export default ScrollContDiv;
