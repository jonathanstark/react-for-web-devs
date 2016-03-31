import React, {
    StyleSheet,
    Text,
    View
} from 'react-native';

import EntryListItem from './EntryListItem';
import u from '../helpers';

var EntryList = React.createClass({
    renderEntryListItem: function(key) {
        var entry = this.props.entries[key];
        if (this.props.date != entry.date) { return }
        return (
            <EntryListItem
                key={key}
                index={key}
                entry={entry}
                deleteEntry={this.props.deleteEntry} />
        )
    },
    render: function() {
        return (
            <View style={styles.column}>
                {Object.keys(this.props.entries).map(this.renderEntryListItem)}
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
    column: {
        alignItems: 'flex-end',
        flexDirection: 'column',
        marginTop: 10,
    }
});

export default EntryList;