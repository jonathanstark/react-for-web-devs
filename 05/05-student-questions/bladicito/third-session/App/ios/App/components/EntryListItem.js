import React, {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

var EntryListItem = React.createClass({
    render: function() {
        var entry = this.props.entry;
        return (
            <View>
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

export default EntryListItem;