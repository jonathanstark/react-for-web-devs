import React from 'react';

var EntryTableRow = React.createClass({
    propTypes: {
        index: React.PropTypes.string.isRequired,
        deleteEntry: React.PropTypes.func.isRequired,
        entry: React.PropTypes.shape({
            calories: React.PropTypes.number.isRequired,
            description: React.PropTypes.string.isRequired,
            time: React.PropTypes.string.isRequired,
            type: React.PropTypes.string.isRequired
        })
    },
    handleClick: function(event) {
        event.preventDefault();
        this.props.deleteEntry(this.props.index);
    },
    render: function() {
        var entry = this.props.entry;
        return (
            <tr className="food">
                <td className="type text">{entry.type}</td>
                <td className="description text">{entry.description}</td>
                <td className="calories number">{entry.calories}</td>
                <td className="time datetime">{entry.time}</td>
                <td className="controls">
                    <a
                        className="button delete-food"
                        href="./delete"
                        onClick={this.handleClick}>Delete</a>
                </td>
            </tr>
        )
    }
});

export default EntryTableRow;