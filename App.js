import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './src/Service/combiner';
import {ThemeContext, themes} from "./src/Component/themes-context";
import Connector from "./src/Pages/Connector";

const initialState = {};
export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                    <View style={styles.container}>
                        <Connector/>
                    </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
