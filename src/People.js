import React, {Component} from "react";

class People extends Component {

    handleClick() {
        console.log("Hello, world"); }
        
    render () {
        const {names} = this.props;

        return (
            !names ? <p>Nothing to see here</p> :
                <ul onClick={ this.handleClick }>{
                    names.map(name => <li>{name}</li>)
                }</ul> 
        );
    } 
}

export default People;