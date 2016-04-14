import React, {
    StyleSheet,
    Text,
    View
    TouchableHighlight
} from 'react-native';

import u from '../helpers';

var FoodForm = React.createClass({
    getInitialState: function(){

    },

    updateState: function(event, key) {
        if(key === 'calories') {
            this.state[key] = parseInt(event.nativeEvent.text);
        }

        this.state[key] = event.nativeEvent.text;
        this.setState(this.state);

    },

    render: function() {
        return(
            <View style={styles.column}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={styles.default}
                    ref="description"
                    autoCapitalize="words"
                    placeHolder="e.g. Bagel"
                    onChange={(event) => this.updateState(event, 'description')}
                />
                <Text style={styles.label}>Calories</Text>

                <TextInput
                    style           = {styles.default}
                    ref             = "calories"
                    autoCapitalize  = "none"
                    keyboardType    = "numeric"
                    placeHolder     = "e.g. 205"
                    onChange        = {(event) => this.updateState(event, 'description')}
                />
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor={'lightgray'}
                    onPress={this.handlePress}

                >

                </TouchableHighlight>

            </View>
        );
    }
});

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    },
    large: {
        fontSize: 40
    }
});


export default Summary;