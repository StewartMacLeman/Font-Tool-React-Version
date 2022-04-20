import React from 'react';

const H2Sample = (props) => {
    return (
        <h2 ref={props.elementUsed} style={{color: `${props.textCol}`, fontSize: `${props.fontSize}px`}}>{props.sampleText}</h2>
    )
}

export default H2Sample;