import React, { Component } from "react";

class CatchMeIfYouCan extends Component {

    constructor(props) {
        super(props);

        this.state = {
           clicked: 0  
		};
		
		this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
		this.setState({
			clicked: this.state.clicked + 1
		});
    }

    render() {
		const { clicked } = this.state;

		const { jump } = this.props;

        const style = {
            position: 'absolute',
            top: clicked * jump
        }
        return (
			<button 
				style={ style } 
				onClick={ this.handleClick }
			>
				Button
			</button>
        )
    }
}

export default CatchMeIfYouCan;

// Create a <CatchMeIfYouCan jump={ 100 }> component. It should have a <button> that when clicked moves jump pixels down the screen.

// 1. Render the HTML on page
// 2. Track data in state and use that state to update our display
// 2.5. Source the data in state from props or wherever
// 3. Add interactivity so that the state is updated when the user does something
// 3.1. Add event listeners to elements and test that they run
// 3.2. Update the state based on an action


/* JACK'S CODE

import React, { Component } from 'react';
class Catch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			click: 0
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			click: this.state.click + 1
		});
	}
	render() {
		const { click } = this.state;
		const { jump, rotate } = this.props;
		const style = {
			transform: `
				translate(${ click * jump }px, ${ click * jump }px)
				rotate(${ click * rotate }deg)
			`,
			width: 200,
			display: 'block',
			backgroundColor: click % 2 === 0 ? 'pink' : 'lightblue'
		};
		return (
			<button
				onMouseEnter={ this.handleClick }
				style={ style }
			>
				Catch Me!
			</button>
		)
	}
}
export default Catch;

// 1 Make the HTML
// 2 Make state and affect HTML
// 2.5 base something off props
// 3 Add interactivity and update state based on user events

*/