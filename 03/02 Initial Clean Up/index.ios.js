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
                <Text style={styles.h1}>Kilo</Text>
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
    h1: {
        flex: 1,
        fontSize: 60,
        fontWeight: 'bold',
        margin: 40,
        textAlign: 'center',
    },
});

AppRegistry.registerComponent('App', function(){return App});
