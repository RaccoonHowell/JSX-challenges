import React from "react";

const People = ({names}) => (
    !names ? <p>Nothing to see here</p> :
        <ul>{
            names.map(name => <li>{name}</li>)
        }</ul> 
);

export default People;

// 1. Create a component <People> that displays a list of names in a <ul>. The names should comes from an array.

// let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

// 2. Update your <People> component so that it can accept an array of names with a names prop. If no names are passed in it should display a paragraph saying: "Nothing to see here"