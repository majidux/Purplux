import React from 'react';
export const themes = {
    light: {
        backgroundColor: '#f4f4f4',
        color:'#262626',
    },
    dark: {
        backgroundColor: '#282c34',
        borderColor:'#77849b',
        color:'#dedede',
        borderWidth:1
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark
});
