import React, { useState } from 'react';
import './App.css';
import Calendar from './Calendar';
import Header from './Header';
import TodoHeader from './TodoHeader';
import moment from 'moment';

function App(props) {
    const [ym, setYm] = useState(moment());
    const today = moment();

    const nextMonth = (month) => {
        setYm(ym.add(month, 'M'));
    };

    return (
        <div className="layout">
            <div className="todo-container">
                <TodoHeader today={today.format('YYYY / MM / DD')} />
            </div>
            <div className="app-container">
                <Header
                    YearMonth={ym.format('MMMM YYYY')}
                    nextMonth={nextMonth}
                />
                <Calendar YM={ym.format('YYYY/MM/DD')} />
            </div>
        </div>
    );
}

export default App;
