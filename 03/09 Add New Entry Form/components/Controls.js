import React, {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

var Controls = React.createClass({
    handlePressNext: function() {
        this.props.setDate(1);
    },
    handlePressPrev: function() {
        this.props.setDate(-1);
    },
    handlePressFood: function() {
        console.log('Food');
    },
    handlePressExercise: function() {
        console.log('Exercise');
    },
    handlePressMore: function() {
        console.log('More');
    },
    render: function() {
        return (
            <View style={styles.controls}>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor={'lightgray'}
                    onPress={this.handlePressPrev}
                    style={styles.button}>
                        <Text style={styles.label}>Prev</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor={'lightgray'}
                    onPress={this.handlePressNext}
                    style={styles.button}>
                        <Text style={styles.label}>Next</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor={'lightgray'}
                    onPress={this.handlePressFood}
                    style={styles.button}>
                        <Text style={styles.label}>Food</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor={'lightgray'}
                    onPress={this.handlePressExercise}
                    style={styles.button}>
                        <Text style={styles.label}>Exercise</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor={'lightgray'}
                    onPress={this.handlePressMore}
                    style={styles.button}>
                        <Text style={styles.label}>More</Text>
                </TouchableHighlight>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    controls: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        borderRadius: 6,
        borderStyle: 'solid',
        borderWidth: 1,
        margin: 3,
    },
    label: {
        padding: 10,
    },
});

export default Controls;