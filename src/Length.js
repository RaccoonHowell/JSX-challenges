import React, { Component } from "react";

class Length extends Component {
    constructor(props) {
        super(props);

        // adds the value of the input to the state
        this.state = {
             length: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const length = event.currentTarget.value.length;

        this.setState({ length }); // the property name and the variable are the same 
    }

    render() {
        return (
            <>
                <input onChange={ this.handleChange } />
                <p>Length: { this.state.length }</p>
            </>
        )
    }
}

export default Length;

// Create a <Length> component. It should contain an <input> and tell you how many characters have been typed into the <input>.

// 1 Make the HTML
// 2 Make state and affect HTML
// 2.5 base something off props
// 3 Add interactivity and update state based on user events