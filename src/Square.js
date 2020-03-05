import React, { Component } from "react";

class Square extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const current = this.state.clicked;

        this.setState({
            clicked: !current
        })
    }

    render() {
        const { clicked } = this.state;

        const { color } = this.props;

        const divStyle = {
                backgroundColor: clicked ? "green" : color,
                height: 200,
                width: 200,
        };

        return (
            <div 
                onClick={ this.handleClick }
                style={ divStyle } 
            />
        );
    }
}

/* one way of doing it
const divStyle = {
    backgroundColor: 'red',
    height: 200,
    width: 200,
};

const Square = () => (
      <div style = {divStyle}></div>
)
*/

/* a different way of doing it
const Square = ({ colour }) => (
    <div style = {{ backgroundColor: colour, height: 200, width: 200 }}></div>
);
*/

/* setting a default colour
Square.defaultProps = {
    colour: 'green',
};
*/

export default Square;