import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class SignUp extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>SignUp</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    }
});
