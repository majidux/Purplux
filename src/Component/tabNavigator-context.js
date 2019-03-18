import React from 'react';
export const tabTheme = {
    light: {
        color:'#8979f3',
        backgroundColor:'#e7e7e7'
    },
    dark: {
        color:'#ffffff',
        backgroundColor:'#424a57'
    }
};

export const TabNavigatorContext = React.createContext({
    tabTheme: tabTheme.light
});
