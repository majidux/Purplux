import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connectToHoc} from "./hoc";

class Title extends Component {
    render() {
        return (
            <Text style={styles.appTitle}>{this.props.data}</Text>
        );
    }
}

const styles = StyleSheet.create({
    className: {
        flex: 1,
    },
    appTitle: {
        fontSize: 50,
        color: '#7768f3',
        fontWeight: '600',
        fontFamily: 'cursive'
    }
});
export default connectToHoc(Title)
