import React from "react";
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Clicked from './Clicked';
import ToggleText from './ToggleText';
import Counter from './Counter';

const Stuff = ({square}) => (
    <React.Fragment>
        <Header>Hello, world!</Header>
        <Paragraph></Paragraph>
        <Square color="blue" />
        <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
        <Clicked />
        <ToggleText initial="Hello" alternate="World" />
        <Counter initial={ 50 } max={ 100 } />
    </React.Fragment>
);

export default Stuff;