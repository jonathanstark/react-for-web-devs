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
            date: '',
            entries: {}
        }
    },
    addEntry(entry) {
        var entries = u.getDbRef('entries');
        entries.push(entry);
    },
    deleteEntry: function(key) {
        var entry = u.getDbRef('entries/' + key);
        entry.remove();
    },
    setDate: function(offset) {
        var date = new Date(this.state.date);
        date.setUTCDate(date.getUTCDate() + offset);
        var storeDate = u.storeDate(date);
        var dbRef = u.getDbRef('date');
        dbRef.set(storeDate);
    },
    componentDidMount: function() {
        var _this = this;
        var dbRef = u.getDbRef();
        dbRef.on('value', function(data){
            _this.setState(data.val());
        });
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