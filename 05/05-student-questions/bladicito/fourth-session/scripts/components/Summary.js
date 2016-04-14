import React from 'react';
import u from '../helpers';

var Summary = React.createClass({
    render: function() {
        var calories = u.caloriesRemaining(this.props.entries, this.props.date);
        var date = u.prettyDate(this.props.date);
        return (
            <h1>
                <div className="date">{date}</div>
                <div className="calories">{calories}</div>
                <div className="label">calories left</div>
            </h1>
        )
    }
});

export default Summary;