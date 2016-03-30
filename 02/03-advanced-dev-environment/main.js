var React = require('react');
var ReactDOM = require('react-dom');

/* Define the components */

var App = React.createClass({
    getInitialState: function() {
        return {
            calories: 520,
            date: 'Tue Jan 5',
            entries: {
                entry1: {
                    type: 'Food',
                    description: 'Bagel',
                    calories: 400,
                    date: '2016-01-05',
                    time: '12:34'
                },
                entry2: {
                    type: 'Food',
                    description: 'OJ',
                    calories: 120,
                    date: '2016-01-05',
                    time: '12:34'
                }
            }
        }
    },
    deleteEntry: function(key) {
        delete this.state.entries[key];
        this.setState({entries : this.state.entries});
    },
    render: function() {
        return (
            <section className="home">
                <Summary date={this.state.date} calories={this.state.calories} />
                <Controls />
                <EntryTable
                    date={this.state.date}
                    entries={this.state.entries}
                    deleteEntry={this.deleteEntry} />
            </section>
            )
    }
});

var Summary = React.createClass({
    render: function() {
        return (
            <h1>
                <div className="date">{this.props.date}</div>
                <div className="calories">{this.props.calories}</div>
                <div className="label">calories left</div>
            </h1>
        )
    }
});

var Controls = React.createClass({
    render: function() {
        return (
            <ul>
                <li><a className="button" href="./next">Next</a></li>
                <li><a className="button" href="./prev">Prev</a></li>
                <li><a className="button" href="./food">Food</a></li>
                <li><a className="button" href="./exercise">Exercise</a></li>
                <li><a className="button" href="./more">More</a></li>
            </ul>
        )
    }
});

var EntryTable = React.createClass({
    renderEntryTableRow: function(key) {
        return (
            <EntryTableRow
            key={key}
            index={key}
            entry={this.props.entries[key]}
            deleteEntry={this.props.deleteEntry} />
        )
    },
    render: function() {
        return (
            <section className="home entries">
                <table>
                    <caption>Entries for {this.props.date}</caption>
                    <thead>
                        <tr>
                            <th className="text">Type</th>
                            <th className="text">Description</th>
                            <th className="number">Calories</th>
                            <th className="datetime">Time</th>
                            <th className="text">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.props.entries).map(this.renderEntryTableRow)}
                    </tbody>
                </table>
            </section>
        )
    }
});

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

/* Let's do this... */

var wrapper = document.getElementById('wrapper');
ReactDOM.render(<App />, wrapper);