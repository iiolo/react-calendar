import React from 'react';

function Header(props) {
    return (
        <div className="header-container">
            <h2 className="header-YearMonth header-middle">
                {props.YearMonth}
            </h2>
            <ul className="header-buttons header-middle">
                <li>
                    <i
                        className="move-button arrow-left icon"
                        onClick={() => {
                            props.nextMonth(-1);
                        }}
                    ></i>
                </li>
                <li>
                    <i
                        className="move-button arrow-right icon"
                        onClick={() => {
                            props.nextMonth(+1);
                        }}
                    ></i>
                </li>
            </ul>
        </div>
    );
}

export default Header;
