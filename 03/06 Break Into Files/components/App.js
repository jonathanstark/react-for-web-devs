import React, {
    StyleSheet,
    View
} from 'react-native';

import Summary from './Summary';
import Controls from './Controls';

var App = React.createClass({
    getInitialState: function() {
        return {
            calories: 520,
            date: 'Tue Jan 5'
        }
    },
    render: function() {
        return (
            <View style={styles.body}>
                <Summary date={this.state.date} calories={this.state.calories} />
                <Controls/>
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