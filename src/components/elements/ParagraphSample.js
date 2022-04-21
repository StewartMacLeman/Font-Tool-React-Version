import React from "react";

const ParagraphSample = (props) => {
  return (
    <p
      ref={props.elementUsed}
      style={{
        color: `${props.textCol}`,
        fontSize: `${props.fontSize}px`,
        fontFamily: `${props.fontFam}`,
      }}
    >
      {props.sampleText}
    </p>
  );
};

export default ParagraphSample;
