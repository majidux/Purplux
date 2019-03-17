

import {ThemeContext} from './themes-context';
import {Text, TouchableOpacity} from "react-native";
import React from "react";
function ThemeTogglerButton() {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <TouchableOpacity
                    onPress={toggleTheme}
                    style={{backgroundColor: theme.background}}
                >
                    <Text>Toggle Theme</Text>
                </TouchableOpacity>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeTogglerButton;

