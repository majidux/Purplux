import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class About extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>About</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    }
});
