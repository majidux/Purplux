import React from 'react';
export const tabTheme = {
    light: {
        color:'#8979f3',
        tab:'#e7403e'
    },
    dark: {
        color:'#ffffff',
        tab:'#1e5730'
    }
};

export const TabNavigatorContext = React.createContext({
    tabTheme: tabTheme.light
});
