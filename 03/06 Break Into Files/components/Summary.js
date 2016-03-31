import React, {
    StyleSheet,
    Text,
    View
} from 'react-native';

var Summary = React.createClass({
    render: function() {
        return (
            <View style={styles.center}>
                <Text style={styles.large}>{this.props.date}</Text>
                <Text style={[styles.large, styles.bold]}>{this.props.calories}</Text>
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