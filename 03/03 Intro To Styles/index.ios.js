import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
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
