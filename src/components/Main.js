import React, { useState, useRef, useEffect } from "react";
import ScrollContainer from "./ScrollContainer";
import SampleTextCont from "./SampleTextCont";
import ButtonsCont from "./ButtonsCont";
import FontSelcCont from "./FontSelcCont";

const Main = (props) => {
  const [sampleText, setSampleText] = useState("Font Group: Font Family");
  const [textSize, setTextSize] = useState("36");
  const [fontFam, setFontFamily] = useState("");
  const [bgSampleColour, setBgSampleColour] = useState("white");
  const [textSampleColour, setTextSampleColour] = useState("black");
  const [elementDisplayed, setElementDisplayed] = useState("h1");
  const bgScrollDiv = useRef();
  const textScrollDiv = useRef();
  const fontsScrollDiv = useRef();

  const elementUsed = useRef();
  useEffect(() => getElement(), [elementDisplayed]);

  const getElement = () => {
    let element = elementUsed.current;
    let computed = getComputedStyle(element);
    let size = computed.getPropertyValue("font-size");
    let parsedSize = parseInt(size);
    setTextSize(parsedSize);
  };

  const getColourInfoHandler = (e) => {
    let textResult = e.target.dataset.text;
    let colourResult = e.target.dataset.colour;
    if (textResult === "background") {
      setBgSampleColour(colourResult);
    } else if (textResult === "text") {
      setTextSampleColour(colourResult);
    }
  };

  const elementButtonClickedHandler = (e) => {
    const button = e.target.value;
    if (button === "h1") {
      setElementDisplayed("h1");
      setTextSize("36");
    } else if (button === "h2") {
      setElementDisplayed("h2");
      setTextSize("24");
    } else if (button === "p") {
      setElementDisplayed("p");
      setTextSize("18");
    }
  };

  const changeFontSizeHandler = (e) => {
    let change = e.target.dataset.change;
    if (change === "decrease") {
      setTextSize(textSize - 1);
    } else if (change === "increase") {
      setTextSize(textSize + 1);
    }
  };

  const sampleTextUpdateHandler = (e) => {
    let fontType = e.target.dataset.font;
    let fontSampleText = e.target.dataset.sampletext;
    setFontFamily(fontType);
    setSampleText(fontSampleText);
  };

  const reset = () => {
    setSampleText("Font Group: Font Family");
    setTextSize("36");
    setFontFamily("helvetica");
    setBgSampleColour("white");
    setTextSampleColour("black");
    setElementDisplayed("h1");

    bgScrollDiv.current.scrollLeft = 0;
    textScrollDiv.current.scrollLeft = 0;
    fontsScrollDiv.current.scrollTop = 0;
  };

  return (
    <main className="main">
      <ScrollContainer
        colourNames={props.colourNames}
        text="background"
        colour={bgSampleColour}
        getColourInfo={getColourInfoHandler}
        scrollDiv={bgScrollDiv}
      />
      <ScrollContainer
        colourNames={props.colourNames}
        text="text"
        colour={textSampleColour}
        getColourInfo={getColourInfoHandler}
        scrollDiv={textScrollDiv}
      />
      <SampleTextCont
        sampleText={sampleText}
        backgroundCol={bgSampleColour}
        textCol={textSampleColour}
        elementDisplayed={elementDisplayed}
        elementUsed={elementUsed}
        fontSize={textSize}
        fontFam={fontFam}
      />
      <ButtonsCont
        clickedButton={elementDisplayed}
        buttonSelected={elementButtonClickedHandler}
        textSize={textSize}
        changeFontSize={changeFontSizeHandler}
        reset={reset}
      />
      <FontSelcCont
        fonts={props.fonts}
        updateFont={sampleTextUpdateHandler}
        fontsScroll={fontsScrollDiv}
      />
    </main>
  );
};

export default Main;
