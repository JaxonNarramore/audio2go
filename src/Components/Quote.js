import React, { Component } from 'react'

export default class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: {
                audio: props.audio,
                other: props.other
            }
        }
    }

    handleQuoteChanged(event) {
        var quote = this.state.quote;
        quote.status = event.target.value;

        this.setState({ quote: quote });
    }

    handleButtonClicked(event) {
        event.preventDefault();
        console.log(this.state.quote);
    }

    render() {
        return (
            <div>
                <form action="">
                    <label for="Auto">Auto</label>
                    <input id='Auto' type="radio" value="Auto" />
                    <label for="Marine">Marine</label>
                    <input id='Marine' type="radio" value="Marine" />
                    <label for="Home/Commerical">Home/Commerical</label>
                    <input id='Home/Commerical' type="radio" value="Home/Commerical" />
                </form>
                <form action="">
                    <label for="Audio Options">Extra options</label>
                    <select name="Audio Options" id="">
                        <option value="100">Speaker</option>
                        <option value="150">Radio</option>
                        <option value="50">Wires</option>
                    </select>
                    <label for="Other">Other options</label>
                    <select value={this.state.quote.other} onChange={this.handleQuoteChanged.bind(this)} name="Other" id="">
                        <option value="300">Door</option>
                        <option value="550">Trunk</option>
                        <option value="10">Hood</option>
                    </select>
                    <button onClick={this.handleButtonClicked.bind(this)}>
                        Get Quote
                    </button>
                </form>
            </div>
        )
    }
}
