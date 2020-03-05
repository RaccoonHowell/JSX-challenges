import React, { Component } from "react";

class TempConverter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            celciusInput: "",
            fahrenheitInput: ""
        }
    }



    render() {
        return(
            <>
                <input 
                    onChange={ this.handleCelciusChange } 
                    placeholder="°F" 
                />
                
                <input placeholder="°C"/>
            </>
        )
    }
}

export default TempConverter;

// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.

// 1 Make the HTML
// 2 Make state and affect HTML
// 2.5 base something off props
// 3 Add interactivity and update state based on user events