import React from 'react';
import ParagraphSample from './elements/ParagraphSample';
import H1Sample from './elements/H1Sample';
import H2Sample from './elements/H2Sample';

const SampleTextCont = (props) => {
    return (
        <div className="textContainer" style={{backgroundColor: `${props.backgroundCol}`}}>
            {(props.elementDisplayed === "h1") && <H1Sample textCol={props.textCol} />}
            {(props.elementDisplayed === "h2") && <H2Sample textCol={props.textCol} />}
            {(props.elementDisplayed === "p") && <ParagraphSample textCol={props.textCol} />}
        </div>
    )
}

export default SampleTextCont;