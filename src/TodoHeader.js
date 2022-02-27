import React from 'react';

function TodoHeader(props) {
    return (
        <div className="todoHeader-container">
            <h3 className="todoHeader">Today Calendar</h3>
            <h3 className="todoHeader-today">{props.today}</h3>
        </div>
    );
}

export default TodoHeader;
