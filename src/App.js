import './App.css';
import Calendar from './Calendar';
import Header from './Header';
import moment from 'moment';
import React, { Component } from 'react';

class App extends Component {
    state = {
        YearMonth: moment(),
        today: moment(),
    };

    nextMonth = (month) => {
        this.setState({
            YearMonth: this.state.YearMonth.add(month, 'M'),
        });
    };

    render() {
        return (
            <div className="layout">
                <div className="app-container">
                    <Header
                        YearMonth={this.state.YearMonth.format('MMMM YYYY')}
                        today={this.state.today.format('YYYY - MM - DD')}
                        nextMonth={this.nextMonth}
                    />
                    <Calendar />
                </div>
            </div>
        );
    }
}

export default App;
