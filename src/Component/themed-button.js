import {ThemeContext} from './themes-context';
import React, {Component} from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';

class ThemedButton extends Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            
                <TouchableOpacity
                    {...props}
                    style={{backgroundColor: theme.background}}>
                    <Text>Change Theme</Text>
                </TouchableOpacity>
        );
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;

