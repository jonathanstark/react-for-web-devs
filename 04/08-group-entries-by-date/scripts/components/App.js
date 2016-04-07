import React from 'react';
import Firebase from 'firebase';
import Summary from './Summary';
import Controls from './Controls';
import EntryTable from './EntryTable';
import FoodForm from './FoodForm';
import u from '../helpers';

var App = React.createClass({
    getInitialState: function() {
        return {
            date: u.currentDate(),
            entries: {}
        }
    },
    addEntry(entry) {
        var entries = u.getDbRef('entries/' + this.state.date);
        entries.push(entry);
    },
    deleteEntry: function(key) {
        var entry = u.getDbRef('entries/' + this.state.date + '/' + key);
        entry.remove();
    },
    getEntries: function() {
        var _this = this;
        var dbRef = u.getDbRef('entries/' + this.state.date);
        dbRef.on('value', function(data){
            var entries = data.val() || {};
            _this.setState({'entries': entries});
        });
    },
    setDate: function(offset) {
        var date = new Date(this.state.date);
        date.setUTCDate(date.getUTCDate() + offset);
        this.state.date = u.storeDate(date);
        this.setState({
            date : this.state.date
        });
        this.getEntries();
    },
    componentDidMount: function() {
        this.getEntries();
    },
    render: function() {
        var currentDate = u.currentDate();
        var currentTime = u.currentTime();
        return (
            <section className="home">
                <Summary date={this.state.date} entries={this.state.entries} />
                <Controls setDate={this.setDate} />
                <EntryTable date={this.state.date} entries={this.state.entries} deleteEntry={this.deleteEntry} />
                <FoodForm date={currentDate} time={currentTime} addEntry={this.addEntry} />
            </section>
        )
    }
});

export default App;