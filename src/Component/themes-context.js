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
        burgerMenu:'#282c34',
        saveButton:'#8979f3'
    },
    dark: {
        backgroundColor: '#424a57',
        fontColor:'#dedede',
        borderWidth:1,
        purpleBackground:'blue',
        inputBackground:'#282c34',
        tabNavigator:'#282c34',
        items:'#282c34',
        inputArea:'#8979f3',
        placeholderTextColor:'#dedede',
        burgerMenu:'#fff',
        saveButton:'#424a57'
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark
});
