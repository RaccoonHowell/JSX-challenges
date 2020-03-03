import React, {Component} from "react";

class Paragraph extends Component {

    render() {

        const {children} = this.props;

        return (

            <p>{children}</p>
        );
    }
}

Paragraph.defaultProps = {
    children: "Hello, world",
};

export default Paragraph;

// Update the <Header> and <Paragraph> components from yesterday to be class based components.