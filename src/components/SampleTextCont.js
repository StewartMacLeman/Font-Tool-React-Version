import React from "react";
import ParagraphSample from "./elements/ParagraphSample";
import H1Sample from "./elements/H1Sample";
import H2Sample from "./elements/H2Sample";

const SampleTextCont = (props) => {
  return (
    <div
      className="textContainer"
      style={{ backgroundColor: `${props.backgroundCol}` }}
    >
      {props.elementDisplayed === "h1" && (
        <H1Sample
          sampleText={props.sampleText}
          textCol={props.textCol}
          elementUsed={props.elementUsed}
          fontSize={props.fontSize}
          fontFam={props.fontFam}
        />
      )}
      {props.elementDisplayed === "h2" && (
        <H2Sample
          sampleText={props.sampleText}
          textCol={props.textCol}
          elementUsed={props.elementUsed}
          fontSize={props.fontSize}
          fontFam={props.fontFam}
        />
      )}
      {props.elementDisplayed === "p" && (
        <ParagraphSample
          sampleText={props.sampleText}
          textCol={props.textCol}
          elementUsed={props.elementUsed}
          fontSize={props.fontSize}
          fontFam={props.fontFam}
        />
      )}
    </div>
  );
};

export default SampleTextCont;
