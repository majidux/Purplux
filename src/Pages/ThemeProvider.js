import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RootSwitchLoadingPage from '../Routes/LoadingPageSwitch'
import {ThemeContext, themes} from "../Component/themes-context";
import {connect} from "react-redux";
import {TabNavigatorContext} from "../Component/tabNavigator-context";


class ThemeProvider extends Component {
    render() {
        return (
                <ThemeContext.Provider value={this.props.themeData.theme}>
                    <TabNavigatorContext.Provider value={this.props.themeData.tabTheme}>
                        <View style={styles.container}>
                            <RootSwitchLoadingPage theme={this.props.themeData.tabTheme}/>
                        </View>
                    </TabNavigatorContext.Provider>
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
export default connect(mapStateToProps)(ThemeProvider)
