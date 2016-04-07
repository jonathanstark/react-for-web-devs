import React, {
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

import u from '../helpers';

var FoodForm = React.createClass({
    getInitialState: function() {
        return {
            calories: 'cals',
            description: 'desc',
            date: '2016-01-07',
            time: '12:34'
        }
    },
    updateState(event, key) {
        if (key == 'calories') {
            this.state[key] = parseInt(event.nativeEvent.text);
        } else {
            this.state[key] = event.nativeEvent.text;
        }
        this.setState(this.state);
    },
    handlePress: function() {
        this.props.addEntry(this.state);
        this.refs.description.setNativeProps({text: ''});
        this.refs.calories.setNativeProps({text: ''});
    },
    render: function() {
        return (
            <View style={styles.column}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                    ref="description"
                    autoCapitalize="words"
                    placeholder="Enter description"
                    autoCorrect={false}
                    onChange={(event) => this.updateState(event, 'description')}
                    style={styles.default}
                />
                <Text style={styles.label}>Calories</Text>
                <TextInput
                    ref="calories"
                    autoCapitalize="none"
                    placeholder="Enter Calories"
                    autoCorrect={false}
                    onChange={(event) => this.updateState(event, 'calories')}
                    keyboardType='numeric'
                    style={styles.default}
                />
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor={'lightgray'}
                    onPress={this.handlePress}
                    style={styles.button}>
                        <Text style={styles.buttonLabel}>Save Entry</Text>
                </TouchableHighlight>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    column: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginTop: 10,
    },
    labelContainer: {
        flexDirection: 'row',
        marginVertical: 2,
        flex: 1,
    },
    label: {
        paddingTop: 20,
    },
    button: {
        borderRadius: 6,
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop: 10,
    },
    buttonLabel: {
        padding: 10,
    },
    default: {
        width: 200,
        height: 26,
        borderWidth: 1,
        flex: 1,
        fontSize: 13,
        padding: 4,
    },
});

export default FoodForm;