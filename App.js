import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoadingPage from "./src/Pages/LoadingPage";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './src/Service/combiner';
import RootSwitchLoadingPage from './src/Routes/LoadingPageSwitch'
import {ThemeContext, themes} from "./src/Component/themes-context";

const initialState = {};
export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeContext.Provider value={themes.light}>
                    <View style={styles.container}>
                        <RootSwitchLoadingPage/>
                    </View>
                </ThemeContext.Provider>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
