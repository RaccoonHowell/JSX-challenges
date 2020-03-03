import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: this.props.initial
        };

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        const current = this.state.counter;

        const { max } = this.props;

        const newCounter = current === max ? max : current + 1;
    
        this.setState({
            counter: newCounter
        })
    }

    handleDecrement() {
        const current = this.state.counter;

        const newCounter = current === 0 ? 0 : current - 1;
    
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

export default Counter;

// Create a <Counter initial={ 50 } max={ 100 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.


// 1. Render the HTML on page
// 2. Track data in state and use that state to update our display
// 2.5. Source the data in state from props or wherever
// 3. Add interactivity so that the state is updated when the user does something
// 3.1. Add event listeners to elements and test that they run
// 3.2. Update the state based on an action