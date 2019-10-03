import React, { Component } from 'react';
import Graph from './Graph';
import Tabs from './Tabs';
import Day from './Day';


class App extends Component {
    state = {
        days: [],
        isLoading: true,
        currentDay: {},
    }

    // https://cors-anywhere.herokuapp.com/ 
    componentDidMount = () => {
        fetch('https://cors-anywhere.herokuapp.com/https://api.ipma.pt/public/opendata/weatherforecast/daily/1110600.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    days: data.data,
                    isLoading: false,
                    currentDay: data.data[0],
                });
            });
    }

    handleChangeDay = day => this.setState({ currentDay: day });

    render() {
        const {
            isLoading,
            days,
            currentDay,
        } = this.state;

        const gif = 'https://media.giphy.com/media/3osxY9NDaiNueolWoM/giphy.gifhttps://media.giphy.com/media/Fk5fNSblPKLGU/giphy.gif';
        if (isLoading) return <img className="loader" src={gif} alt="" />;

        return (
            <div>
                <Graph
                    days={days}
                    onClick={this.handleChangeDay}
                />
                <div className="tabs-wrap">
                    <Tabs
                        days={days}
                        currentDay={currentDay}
                        onClick={this.handleChangeDay}
                    />
                    <Day
                        day={currentDay}
                    />
                </div>
            </div>
        );
    }
}

export default App;
