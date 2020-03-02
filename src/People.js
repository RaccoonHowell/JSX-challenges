import React from "react";

let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
    <ul>
        {names.map(name => <li>{name}</li>)}
    </ul>
  );

export default People;

// Create a component <People> that displays a list of names in a <ul>. The names should comes from an array.