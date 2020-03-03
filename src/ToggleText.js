import React, { Component } from "react";

class ToggleText extends Component {

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

        const { alternate, initial } = this.props;

        return (
            <>
            <button onClick={ this.handleClick }>Toggle</button>
            <p>{ this.state.clicked ?  alternate : initial }</p>
            </>
        )
    }
}

export default ToggleText;

// Create <ToggleText initial="Hello" alternate="World"> component. It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate.