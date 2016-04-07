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
        var timestamp = (new Date()).getTime();
        this.state.entries['entry' + timestamp] = entry;
        this.setState({ entries : this.state.entries });
    },
    deleteEntry: function(key) {
        console.log(key);
        var entry = new Firebase('https://incandescent-fire-1971.firebaseio.com/entries/' + key);
        entry.remove();
    },
    setDate: function(offset) {
        var date = new Date(this.state.date);
        date.setUTCDate(date.getUTCDate() + offset);
        this.state.date = u.storeDate(date);
        this.setState({
            date : this.state.date
        });
    },
    componentWillUpdate: function(nextProps, nextState) {
        var firebase = new Firebase('https://incandescent-fire-1971.firebaseio.com/');
        firebase.set(nextState);
    },
    componentDidMount: function() {
        var _this = this;
        var firebase = new Firebase('https://incandescent-fire-1971.firebaseio.com/');
        firebase.on('value', function(data){
            console.dir(data.val());
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