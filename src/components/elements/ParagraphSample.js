import React from 'react';

const ParagraphSample = (props) => {
    return (
        <p ref={props.elementUsed} style={{color: `${props.textCol}`, fontSize: `${props.fontSize}px`}}>{props.sampleText}</p>
    )
}

export default ParagraphSample;