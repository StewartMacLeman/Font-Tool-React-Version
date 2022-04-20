import React from 'react';

const ButtonsCont = (props) => {
    return (
        <div className="buttonsContainer">
            <button className={props.clickedButton === "h1" ? "buttonOn" : "buttonOff"} onClick={props.buttonSelected} value="h1">h1</button>
            <button className={props.clickedButton === "h2" ? "buttonOn" : "buttonOff"} onClick={props.buttonSelected} value="h2">h2</button>
            <button className={props.clickedButton === "p" ? "buttonOn" : "buttonOff"} onClick={props.buttonSelected} value="p">p</button>
            <button onClick={props.changeFontSize} data-change="decrease">-1px</button>
            <span>{props.textSize}px</span>
            <button onClick={props.changeFontSize} data-change="increase">+1px</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
}

export default ButtonsCont;