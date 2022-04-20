import React from "react";
import ScrollContDiv from "./ScrollContDiv";

const ScrollContainer = (props) => {
  return (
    <div className="colScrollCont">
      <p>The {props.text} colour selected is: {props.colour}</p>
      <div className="horizontalColDiv">
        {props.colourNames
          .map((colourName) => {
            return (
              <ScrollContDiv
                key={colourName}
                colour={colourName}
                text={props.text}
                getColourInfo={props.getColourInfo}
              />
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

export default ScrollContainer;
