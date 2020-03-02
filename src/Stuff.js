import React from "react";
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';

const Stuff = () => (
    <React.Fragment>
        <Header text = 'Hello, world!'/>
        <Paragraph />
        <Square />
        <People />
    </React.Fragment>
);

export default Stuff;

// Create a component <Stuff> that includes all of the components so far and then use it in your <App> component: