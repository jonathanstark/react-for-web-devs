import React, {
    StyleSheet,
    View
} from 'react-native';

import Summary  from './Summary';
import Controls from './Controls';
import entries  from '../entries';
import u        from '../helpers';

var App = React.createClass({
    getInitialState: function() {
        return {
            date: '',
            entries: {}
        }
    },

    addEntry : function(entry) {
        var timeStamp = (new Date()).getTime();

    },

    deleteEntry: function(key){
        delete this.state.entries[key];
        this.setState({entries: this.state.entries})
    },

    setDate: function(offset) {
        var date = new Date(this.state.date);
        date.setUTCDate(date.getUTCDate() + offset);
        this.state.date = u.storeDate(date);
        this.setState({
            date : this.state.date
        });
    },
    componentDidMount: function() {
        this.setState({
            date: '2016-01-07',
            entries: entries
        });
    },
    render: function() {
        var currentDate = u.currentDate(),
            currentTime = u.currentTime()

        ;

        return (
            <View style={styles.body}>
                <Summary date={this.state.date} entries={this.state.entries} />
                <Controls setDate={this.setDate} />
                <entryList date={this.state.date} />
                <FoodForm date={currentDate} time={currentTime} addEntry={}/>
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