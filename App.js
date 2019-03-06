
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoadingPage from "./src/Pages/LoadingPage";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoadingPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
