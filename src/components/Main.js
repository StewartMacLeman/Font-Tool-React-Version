import React, {useState} from 'react';
import ScrollContainer from './ScrollContainer';
import SampleTextCont from './SampleTextCont';
import ButtonsCont from './ButtonsCont';
import FontSelcCont from './FontSelcCont';

const Main = (props) => {
    const [bgSampleColour, setBgSampleColour] = useState("white");
    const [textSampleColour, setTextSampleColour] = useState("black");
    const [elementDisplayed, setElementDisplayed] = useState("p");

    const getColourInfo = (e) => {
        let textResult = e.target.dataset.text;
        let colourResult = e.target.dataset.colour;
        console.log(`The scroll is ${textResult}. The colour is: ${colourResult}`);
        if (textResult === "background") {
            setBgSampleColour(colourResult);
        } else if (textResult === "text") {
            setTextSampleColour(colourResult);
        }
    }
    return (
        <main className="main">
           <ScrollContainer colourNames={props.colourNames} text="background" colour={bgSampleColour} getColourInfo={getColourInfo}/>
           <ScrollContainer colourNames={props.colourNames} text="text" colour={textSampleColour} getColourInfo={getColourInfo}/>
           <SampleTextCont backgroundCol={bgSampleColour} textCol={textSampleColour} elementDisplayed={elementDisplayed}/>
           <ButtonsCont />
           <FontSelcCont />
        </main>
    )
}

export default Main;