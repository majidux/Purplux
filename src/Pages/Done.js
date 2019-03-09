import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Done extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>DONE</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor:'#99ff21',
    }
});
