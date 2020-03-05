import React, { Component } from "react";

class TempConverter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            celsius: 0,
            fahrenheit: 32
        }

        this.handleFahrenheit = this.handleFahrenheit.bind(this);
        this.handleCelsius = this.handleCelsius.bind(this);
    }

    toFahrenheit(num) {
        return num * 1.8 + 32;
    }

    toCelsius(num) {
        return (num - 32) * 5 / 9;
    }

    handleFahrenheit(e) {
        const value = +e.currentTarget.value;
    
        this.setState({
            fahrenheit: value,
            celsius: this.toCelsius(value)
        })
    }

    handleCelsius(e) {
        const value = +e.currentTarget.value;

        this.setState({
            celsius: value,
            fahrenheit: this.toFahrenheit(value)
        })
    }

    render() {
        return(
            <form>
                <label>Fahrenheit</label>
                <input 
                    value={ this.state.fahrenheit }
                    onChange={ this.handleFahrenheit } 
                    placeholder="°F" 
                />
                <label>Celsius</label>
                <input 
                    value={ this.state.celsius }
                    onChange={ this.handleCelsius }
                    placeholder="°C"
                />
            </form>
        )
    }
}

export default TempConverter;

// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.

// 1 Make the HTML
// 2 Make state and affect HTML
// 2.5 base something off props
// 3 Add interactivity and update state based on user events