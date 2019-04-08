import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {karim} from "./hoc";

class Texter extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text style={styles.oon}>{this.props.data}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    className: {
        flex: 1,
    },
    oon: {
        fontSize: 20,
        color: '#7768f3',
        fontWeight: '800',
        fontFamily: 'serif'
    }
});
export default karim(Texter)
