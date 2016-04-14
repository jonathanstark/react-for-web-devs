import React, {
    StyleSheet,
    View,
    Text
} from 'react-native';

import EntryListItem from './EntryListItem';

var EntryList = React.createClass({
    renderEntryListItem: function(key) {
        var entry = this.props.entries[key];

        if(entry.date !== this.props.date) {
            return false;
        }

        return(
            <EntryListItem key={key} index={key} entry={entry} deleteEntry={this.props.deleteEntry}/>
        );
    },
    render: function() {
        return (
            <View style={styles.column}>
                {Object.keys(this.props.entries).map(this.renderEntryListItem)}
            </View>

        )
    }
});

export default EntryList;