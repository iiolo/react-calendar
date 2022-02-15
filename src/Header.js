import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <h2 className="header-YearMonth header-middle">
                    {this.props.YearMonth}
                </h2>
                <h3 className="header-today header-middle">
                    {this.props.today}
                </h3>
                <ul className="header-buttons header-middle">
                    <li>
                        <i className="move-button arrow-left icon"></i>
                    </li>
                    <li>
                        <i className="move-button arrow-right icon"></i>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;
