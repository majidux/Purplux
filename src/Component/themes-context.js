import React from 'react';
export const themes = {
    light: {
        backgroundColor: '#eeeeee',
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dark: {
        backgroundColor: '#575757',
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
};

export const ThemeContext = React.createContext(
    themes.light
);
