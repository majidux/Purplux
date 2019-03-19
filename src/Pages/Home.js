import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import LogoArea from "../Component/LogoArea";
import SvgUri from "react-native-svg-uri";
import RouteTabNavigator from '../Routes/AddTodoTopNavigator'
import {connect} from "react-redux";
import {ThemeContext} from "../Component/themes-context";
import {TabNavigatorContext} from "../Component/tabNavigator-context";
import Icon from "react-native-vector-icons/FontAwesome";


class Home extends Component {
    
    static navigationOptions = ({navigation,theme}) => {
        return {
            headerRight:
                <View>
                    <LogoArea/>
                </View>,
            headerLeft:
                <ThemeContext.Consumer>
                    {(theme) => (
                        <View style={[styles.drawerButton]}>
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <View>
                                    {/*<SvgUri*/}
                                        {/*width={'24'}*/}
                                        {/*height={'24'}*/}
                                        {/*source={require('../Assets/image/three-lines.svg')}*/}
                                        {/*strokeWidth={10}*/}
                                        {/*stroke={'#000'}*/}
                                        {/*strokeLinejoin={'bevel'}*/}
                                        {/*fill={'#e45'}*/}
                                    {/*/>*/}
                                    <Icon name="bars" size={30} color={theme.burgerMenu}/>
                                </View>
                                
                            </TouchableOpacity>
                        </View>
                    )}
                </ThemeContext.Consumer>,
            headerStyle: {backgroundColor: 'skyblue'}
        }
    };
    
    
    render() {
        return (
            <ThemeContext.Consumer>
                {(theme) => (
                    <View style={[styles.lightStyle, {backgroundColor: theme.inputBackground}]}>
                        <RouteTabNavigator/>
                    </View>
                )}
            </ThemeContext.Consumer>
        );
    }
}

Home.contextType = ThemeContext

const styles = StyleSheet.create({
    lightStyle: {
        flex: 1,
        backgroundColor: '#f6f6f6'
    },
    darkStyle: {
        flex: 1,
        backgroundColor: '#373737'
    },
    drawerButton: {
        marginLeft: 20
    }
});

const mapStateToProps = (state) => {
    return {
        change: state.userReducer,
    }
};
export default connect(mapStateToProps)(Home)
