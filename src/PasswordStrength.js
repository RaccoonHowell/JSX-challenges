import React, { Component } from "react";

class PasswordStrength extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const newValue = event.currentTarget.value;

        this.setState({
            value: newValue
        })
    }

    render() {
        const { length } = this.state.value;

        let colour;

        if (length === 0) {
            colour = "";
        } else if (length < 9) {
            colour = "red";
        } else if (length < 16) {
            colour = "orange";
        } else {
            colour = "green";
        }

        const style = {
            backgroundColor: colour
        }
        
        return(
            <input 
                style={ style } 
                type="password" 
                onChange={ this.handleChange }
            />
        )
    }
}

export default PasswordStrength;

// Create a <PasswordStrength> component. It should contain an <input> with the type password. The background styling should change depending on the length of the password:

// If it's empty the background shouldn't have styling.
// If it's less than 9 it should be red.
// If it's less than 16 it should be orange.
// If it's 16 or more then it should be green.

// 1 Make the HTML
// 2 Make state and affect HTML
// 2.5 base something off props
// 3 Add interactivity and update state based on user events