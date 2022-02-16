import React, { Component } from 'react';

class DateHeader extends Component {
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
                    let className = 'calendar-date-component';
                    if (index === 0) {
                        return className + ' date-sun';
                    } else if (index === 6) {
                        return className + ' date-sat';.
                    } else {
                        return className + ' date-weekday';
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
            <div className="calendar-date-header">
                {this.mapArrayToDate(this.dateToArray(this.props.dates))}
            </div>
        );
    }
}

class Calendar extends Component {
    render() {
        return (
            <div className="calendar-container">
                <DateHeader />
            </div>
        );
    }
}

export default Calendar;
