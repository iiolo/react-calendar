import React, { Component } from 'react';

class TodoHeader extends Component {
    render() {
        return (
            <div className="todoHeader-container">
                <h3 className="todoHeader">Today Calendar</h3>
                <h3 className="todoHeader-today">{this.props.today}</h3>
            </div>
        );
    }
}

export default TodoHeader;
