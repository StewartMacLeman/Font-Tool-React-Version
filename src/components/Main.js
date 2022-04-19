import React from 'react';
import ScrollContainer from './ScrollContainer';
import SampleTextCont from './SampleTextCont';
import ButtonsCont from './ButtonsCont';
import FontSelcCont from './FontSelcCont';

const Main = () => {
    return (
        <main className="main">
           <ScrollContainer />
           <ScrollContainer />
           <SampleTextCont />
           <ButtonsCont />
           <FontSelcCont />
        </main>
    )
}

export default Main;