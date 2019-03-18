import React from 'react';
export const themes = {
    light: {
        backgroundColor: '#f4f4f4',
        fontColor:'#262626',
        greenFont:'red',
        inputBackground:'#cccccc',
        tabNavigator:'#cccccc',
        items:'#f4f4f4',
        inputArea:'#fff',
        placeholderTextColor:'#474747',
        burgerMenu:'#282c34'
    },
    dark: {
        backgroundColor: '#424a57',
        borderColor:'#77849b',
        fontColor:'#dedede',
        borderWidth:1,
        purpleBackground:'blue',
        inputBackground:'#282c34',
        tabNavigator:'#282c34',
        items:'#282c34',
        inputArea:'#77849b',
        placeholderTextColor:'#dedede',
        burgerMenu:'#fff'
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark
});
