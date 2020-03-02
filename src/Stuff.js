import React from "react";
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';

const Stuff = ({square}) => (
    <React.Fragment>
        <Header>Hello, world!</Header>
        <Paragraph></Paragraph>
        {square ? <Square /> : null}
        <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
    </React.Fragment>
);

export default Stuff;

// Create a component <Stuff> that includes all of the components so far and then use it in your <App> component:

// Update your <Stuff> component so that it can accept a square prop, which will determine whether the <Square> component is displayed or not. This prop should default to true.