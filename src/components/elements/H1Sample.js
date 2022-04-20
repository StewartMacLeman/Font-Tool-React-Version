import React from 'react';

const H1Sample = (props) => {
    return (
        <h1 ref={props.elementUsed} style={{color: `${props.textCol}`, fontSize: `${props.fontSize}px`}}>{props.sampleText}</h1>
    )
}

export default H1Sample;