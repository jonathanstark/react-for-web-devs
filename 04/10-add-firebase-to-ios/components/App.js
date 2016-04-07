import React, {
    StyleSheet,
    View
} from 'react-native';

import Summary from './Summary';
import Controls from './Controls';
import EntryList from './EntryList';
import FoodForm from './FoodForm';
import entries from '../entries';
import u from '../helpers';

import Firebase from 'firebase';

var App = React.createClass({
    getInitialState: function() {
        return {
            date: u.currentDate(),
            entries: {}
        }
    },
    addEntry(entry) {
        var entries = u.getDbRef('entries');
        entries.child(this.state.date).push(entry);
    },
    deleteEntry: function(key) {
        var entries = u.getDbRef('entries');
        entries.child(this.state.date).child(key).remove();
    },
    getEntries: function() {
        var _this = this;
        var entries = u.getDbRef('entries');
        var entriesForDate = entries.child(this.state.date);
        entriesForDate.on('value', function(data){
            var entriesForDate = data.val() || {};
            _this.setState({'entries': entriesForDate});
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
    },    render: function() {
        var currentDate = u.currentDate();
        var currentTime = u.currentTime();
        return (
            <View style={styles.body}>
                <Summary date={this.state.date} entries={this.state.entries} />
                <Controls setDate={this.setDate} />
                <EntryList date={this.state.date} entries={this.state.entries} deleteEntry={this.deleteEntry} />
                <FoodForm date={currentDate} time={currentTime} addEntry={this.addEntry} />
            </View>
        )
    }
});

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        flex: 1,
        padding: 40,
    }
});

export default App;