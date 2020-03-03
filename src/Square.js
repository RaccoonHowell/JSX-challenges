import React from "react";

// const divStyle = {
//     backgroundColor: 'red',
//     height: 200,
//     width: 200,
// };

// const Square = () => (
//       <div style = {divStyle}></div>
// )

const Square = ({ colour }) => (
    <div style = {{ backgroundColor: colour, height: 200, width: 200 }}></div>
);

Square.defaultProps = {
    colour: 'green',
};

export default Square;

// Create a component <Square> that displays a square <div> that is 200×200px and has a red background