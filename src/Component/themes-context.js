import React from 'react';
export const themes = {
    light: {
        backgroundColor: '#f4f4f4',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dark: {
        backgroundColor: '#575757',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lightFont:{
        color:'#fff',
    },
    darkFont:{
        color:'#000',
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark
});
