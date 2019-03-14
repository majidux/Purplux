import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Setting extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>Setting</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        paddingLeft:20,
        paddingTop:20
    }
});
