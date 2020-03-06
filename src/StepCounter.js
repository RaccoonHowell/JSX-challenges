import React, { Component } from "react";

class StepCounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        const current = this.state.counter;

        const { step } = this.props;

        const { max } = this.props;

        const newCounter = current === +max ? +max : current + +step;

        this.setState({
            counter: newCounter
        })
    }

    handleDecrement() {
        const current = this.state.counter;

        const { step } = this.props;

        const newCounter = current === 0 ? 0 : current - +step;

        this.setState({
            counter: newCounter
        })
    }

    render() {
        return(
            <>
                <button onClick={ this.handleDecrement }>-</button>
                <button onClick={ this.handleIncrement }>+</button>
                <p>{ this.state.counter }</p>
            </>
        )
    }

}

export default StepCounter;

// Create a <StepCounter max={ 100 } step={ 5 } /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

// 1. Render the HTML on page
// 2. Track data in state and use that state to update our display
// 2.5. Source the data in state from props or wherever
// 3. Add interactivity so that the state is updated when the user does something
// 3.1. Add event listeners to elements and test that they run
// 3.2. Update the state based on an action