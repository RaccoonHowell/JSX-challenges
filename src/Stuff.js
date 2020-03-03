import React from "react";
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Clicked from './Clicked';

const Stuff = ({square}) => (
    <React.Fragment>
        <Header>Hello, world!</Header>
        <Paragraph></Paragraph>
        {square ? <Square /> : null}
        <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
        <Clicked />
    </React.Fragment>
);

export default Stuff;