import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Failed extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>Failed</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor:'#e85'
    }
});
