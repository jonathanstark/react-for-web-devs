import React from 'react';

var Controls = React.createClass({
    handleClickNext: function(event) {
        event.preventDefault();
        this.props.setDate(1);
    },
    handleClickPrev: function(event) {
        event.preventDefault();
        this.props.setDate(-1);
    },
    render: function() {
        return (
            <ul>
                <li><a onClick={this.handleClickPrev} className="button" href="./prev">Prev</a></li>
                <li><a onClick={this.handleClickNext} className="button" href="./next">Next</a></li>
                <li><a className="button" href="./food">Food</a></li>
                <li><a className="button" href="./exercise">Exercise</a></li>
                <li><a className="button" href="./more">More</a></li>
            </ul>
        )
    }
});

export default Controls;