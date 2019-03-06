import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoadingPage from "./src/Pages/LoadingPage";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './src/Service/combiner';

const initialState = {};
export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <LoadingPage/>
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
