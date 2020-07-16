import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            showAlert: false
        }
    }
    render() {
        return (
            <div data-test="component-app">
                <h1 data-test="counter-display">The counter is currently: {this.state.counter}</h1>
                {this.state.showAlert && (
                    <h2 data-test="alert-display">counter can not be under 0</h2>
                )}
                <button
                    data-test="increment-button"
                    onClick={() => {
                        this.state.counter === 0 && this.setState({showAlert: false})
                        this.setState({counter: this.state.counter + 1})
                    }}
                >
                    Increment counter
                </button>
                <button
                    data-test="decrement-button"
                    onClick={() => this.state.counter > 0 ? this.setState({counter: this.state.counter - 1})
                    : this.setState({showAlert: true})
                    }
                >
                    Decrement counter
                </button>

            </div>
        );
    }
}

export default App;