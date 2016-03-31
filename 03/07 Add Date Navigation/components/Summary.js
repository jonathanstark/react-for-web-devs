import React, {
    StyleSheet,
    Text,
    View
} from 'react-native';

import u from '../helpers';

var Summary = React.createClass({
    render: function() {
        var calories = u.caloriesRemaining(this.props.entries, this.props.date);
        var date = u.prettyDate(this.props.date);
        return (
            <View style={styles.center}>
                <Text style={styles.large}>{date}</Text>
                <Text style={[styles.large, styles.bold]}>{calories}</Text>
                <Text style={styles.large}>calories left</Text>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    large: {
        fontSize: 40,
    }
});

export default Summary;