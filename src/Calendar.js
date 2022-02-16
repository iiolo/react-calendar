import React, { Component } from 'react';

class WeekHeader extends Component {
    dateToArray = (dates) => {
        if (Array.isArray(dates)) {
            return dates;
        } else if (typeof dates === 'string') {
            return dates.split(',');
        } else {
            return ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        }
    };

    mapArrayToDate = (dateArray) => {
        try {
            if (dateArray.length !== 7) {
                console.log(new Error('dates props must be had 7 date'));
                dateArray = ['일', '월', '화', '수', '목', '금', '토'];
            }

            return dateArray.map((date, index) => {
                const className = () => {
                    let className = 'calendar-week-component';
                    if (index === 0) {
                        return className + ' week-sun';
                    } else if (index === 6) {
                        return className + ' week-sat';
                    } else {
                        return className + ' week-weekday';
                    }
                };
                return (
                    <div className={className()} key={'header-' + date}>
                        {date}
                    </div>
                );
            });
        } catch {
            throw new Error('date must be string or component');
        }
    };

    render() {
        return (
            <div className="calendar-week-header">
                {this.mapArrayToDate(this.dateToArray(this.props.dates))}
            </div>
        );
    }
}

class Calendar extends Component {
    render() {
        return (
            <div className="calendar-container">
                <WeekHeader />
            </div>
        );
    }
}

export default Calendar;
