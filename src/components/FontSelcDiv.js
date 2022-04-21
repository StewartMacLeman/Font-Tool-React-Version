import React from "react";

const FontSelcDiv = (props) => {
  return (
    <div className="fontScrollItemDiv">
      <p className="fontItemText" style={{ fontFamily: `${props.fontFamily}` }}>
        {props.fontGroup}: {props.fontFamily}
      </p>
      <div
        className="overlayDiv"
        data-sampletext={`${props.fontGroup}: ${props.fontFamily}`}
        data-font={props.fontFamily}
        onClick={props.updateFont}
      ></div>
    </div>
  );
};

export default FontSelcDiv;
