import React from 'react';
import ScrollContainer from './ScrollContainer';
import SampleTextCont from './SampleTextCont';
import ButtonsCont from './ButtonsCont';
import FontSelcCont from './FontSelcCont';

const Main = (props) => {

    const getColourInfo = (e) => {
        let textResult = e.target.dataset.text;
        let colourResult = e.target.dataset.colour;
        console.log(`The scroll is ${textResult}. The colour is: ${colourResult}`);
    }
    return (
        <main className="main">
           <ScrollContainer colourNames={props.colourNames} text="background" getColourInfo={getColourInfo}/>
           <ScrollContainer colourNames={props.colourNames} text="text" getColourInfo={getColourInfo}/>
           <SampleTextCont />
           <ButtonsCont />
           <FontSelcCont />
        </main>
    )
}

export default Main;