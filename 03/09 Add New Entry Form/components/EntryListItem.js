import React, {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

var EntryListItem = React.createClass({
    handlePress: function(event) {
        this.props.deleteEntry(this.props.index);
    },
    render: function() {
        var entry = this.props.entry;
        return (
            <View style={styles.row}>
                <Text>{entry.calories} cal of {entry.description}</Text>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor={'lightgray'}
                    onPress={this.handlePress}
                    style={styles.button}>
                        <Text style={styles.label}>Delete</Text>
                </TouchableHighlight>
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
    row: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
});

export default EntryListItem;