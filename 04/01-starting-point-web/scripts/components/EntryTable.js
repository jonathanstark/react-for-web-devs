import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import EntryTableRow from './EntryTableRow';

var EntryTable = React.createClass({
    renderEntryTableRow: function(key) {
        var entry = this.props.entries[key];
        if (this.props.date != entry.date) { return }
        return (
            <EntryTableRow
                key={key}
                index={key}
                entry={entry}
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
                    <CSSTransitionGroup
                        component="tbody"
                        transitionName="entry"
                        transitionLeaveTimeout={1000}
                        transitionEnterTimeout={1000}
                    >
                        {Object.keys(this.props.entries).map(this.renderEntryTableRow)}
                    </CSSTransitionGroup>
                </table>
            </section>
        )
    }
});

export default EntryTable;