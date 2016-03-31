import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

var App = React.createClass({
    render: function() {
        return (
            <View style={styles.body}>
                <View style={styles.center}>
                    <Text style={styles.large}>Tue Jan 5</Text>
                    <Text style={[styles.large, styles.bold]}>520</Text>
                    <Text style={styles.large}>calories left</Text>
                </View>
                <Controls/>
            </View>
        )
    }
});

var Controls = React.createClass({
    handlePressNext: function() {
        console.log('Next');
    },
    handlePressPrev: function() {
        console.log('Prev');
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
                    onPress={this.handlePressNext}
                    style={styles.button}>
                        <Text style={styles.label}>Next</Text>
                </TouchableHighlight>
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
    body: {
        alignItems: 'center',
        flex: 1,
        padding: 40,
    },
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
    center: {
        alignItems: 'center',
    },
    large: {
        fontSize: 40,
    },
    medium: {
        fontSize: 30,
    },
    small: {
        fontSize: 20,
    },
});

AppRegistry.registerComponent('App', function(){return App});
