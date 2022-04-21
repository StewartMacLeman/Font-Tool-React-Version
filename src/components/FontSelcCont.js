import React from "react";
import FontSelcDiv from "./FontSelcDiv";

const FontSelcCont = (props) => {
  return (
    <div ref={props.fontsScroll} className="fontScrollCont">
      <p className="guideMessage">Scroll, select and click!</p>
      {props.fonts.map((item) => {
        return (
          <FontSelcDiv
            key={item.id}
            fontGroup={item.group}
            fontFamily={item.family}
            updateFont={props.updateFont}
          />
        );
      })}
    </div>
  );
};

export default FontSelcCont;
