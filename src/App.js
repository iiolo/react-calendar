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

    render() {
        return (
            <div className="layout">
                <div className="app-container">
                    <Header
                        YearMonth={this.state.YearMonth.format('MMMM YYYY년')}
                        today={this.state.today.format('현재 YYYY - MM - DD')}
                    />
                    <Calendar />
                </div>
            </div>
        );
    }
}

export default App;
