import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import LogoArea from "../Component/LogoArea";
import SvgUri from "react-native-svg-uri";
import RouteTabNavigator from '../Routes/AddTodoTopNavigator'
import {connect} from "react-redux";
import {ThemeContext} from "../Component/themes-context";
import {TabNavigatorContext} from "../Component/tabNavigator-context";
import Icon from "react-native-vector-icons/FontAwesome";
import {NavigationEvents} from 'react-navigation';


class Home extends Component {
    
    
    static navigationOptions = ({navigation}) => {
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
                                    <Icon name="bars" size={30} color={theme.burgerMenu}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </ThemeContext.Consumer>,
            headerStyle: {backgroundColor: navigation.getParam('ctx', 'red')}
        }
    };
   
    
    render() {
        let theme = this.context;
        return (
            <View style={[styles.lightStyle, {backgroundColor: theme.inputBackground}]}>
                <NavigationEvents
                    onDidFocus={payload => this.props.navigation.setParams({ctx: theme.backgroundColor})}
                    // onWillBlur={payload => this.props.navigation.setParams({ctx: theme.backgroundColor})}
                />
                <RouteTabNavigator/>
            </View>
        );
    }
}

Home.contextType = ThemeContext;

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
