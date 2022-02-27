import React from 'react';
import moment from 'moment';
function DateHeader(props) {
    const dateToArray = (dates) => {
        if (Array.isArray(dates)) {
            return dates;
        } else if (typeof dates === 'string') {
            return dates.split(',');
        } else {
            return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        }
    };

    const mapArrayToDate = (dateArray) => {
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
                        return className + ' date-sat';
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

    return (
        <div className="calendar-date-header">
            {mapArrayToDate(dateToArray(props.dates))}
        </div>
    );
}

function Week(props) {
    const Days = (firstDayFormat) => {
        const _days = [];

        for (let i = 0; i < 7; i++) {
            const Day = moment(firstDayFormat).add('d', i);
            _days.push({
                yearMonthDayFormat: Day.format('YYYY/MM/DD'),
                getDay: Day.format('D'),
                isHolyDay: false,
            });
        }

        return _days;
    };

    const mapDaysToComponents = (Days, calendarMonthYear, fn = () => {}) => {
        const thisMonth = moment(calendarMonthYear);
        return Days.map((dayInfo, i) => {
            let className = 'date-weekday-label';
            if (!thisMonth.isSame(dayInfo.yearMonthDayFormat, 'month')) {
                className = 'date-notThisMonth';
            } else if (i === 0) {
                className = 'date-sun';
            } else if (i === 6) {
                className = 'date-sat';
            }

            return (
                <div
                    className={'calendar-day ' + className}
                    onClick={() => fn(dayInfo.yearMonthDayFormat)}
                >
                    <label className="calendar-day-label">
                        {dayInfo.getDay}
                    </label>
                </div>
            );
        });
    };

    return (
        <div className="calendar-week">
            {mapDaysToComponents(
                Days(props.firstDayOfThisWeekformat),
                props.ymOfThisCalendar
            )}
        </div>
    );
}
function Calendar(props) {
    const Weeks = (monthYear) => {
        const firstDayOfMonth = moment(monthYear).startOf('month');
        const firstDateOfMonth = firstDayOfMonth.get('d');

        const firstDayOfWeek = firstDayOfMonth
            .clone()
            .add('d', -firstDateOfMonth);

        const _Weeks = [];

        for (let i = 0; i < 6; i++) {
            _Weeks.push(
                <Week
                    key={`calendar-week-${i}`}
                    ymOfThisCalendar={firstDayOfMonth.format('YYYY-MM')}
                    firstDayOfThisWeekformat={firstDayOfWeek
                        .clone()
                        .add('d', i * 7)
                        .format('YYYY/MM/DD')}
                />
            );
        }
        return _Weeks;
    };

    return (
        <div className="calendar-container">
            <DateHeader />
            {Weeks(props.YM)}
        </div>
    );
}

export default Calendar;
