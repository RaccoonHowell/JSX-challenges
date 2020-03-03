import React, {Component} from "react";

class Header extends Component {

    render() {

        const {children} = this.props;

        return (

            <h1>{children}</h1>
        );
    }
 }

export default Header;

// Update the <Header> and <Paragraph> components from yesterday to be class based components.