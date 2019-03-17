import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RootSwitchLoadingPage from '../Routes/LoadingPageSwitch'
import {ThemeContext, themes} from "../Component/themes-context";
import {connect} from "react-redux";


class Connector extends Component {
    render() {
        return (
                <ThemeContext.Provider value={this.props.themeData.theme}>
                    <View style={styles.container}>
                        <RootSwitchLoadingPage/>
                    </View>
                </ThemeContext.Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
const mapStateToProps = (state) => {
    return {
        themeData: state.userReducer
    }
}
export default connect(mapStateToProps)(Connector)
