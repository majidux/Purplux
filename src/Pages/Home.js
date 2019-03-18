import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import AddTodo from "./AddTodo";
import LogoArea from "../Component/LogoArea";
import About from "./About";
import SvgUri from "react-native-svg-uri";
import Setting from "./Setting";
import RouteTabNavigator from '../Routes/AddTodoTopNavigator'
import {connect} from "react-redux";
import {ThemeContext, themes} from "../Component/themes-context";
import {TabNavigatorContext} from "../Component/tabNavigator-context";


class Home extends Component {
    
    static navigationOptions = ({navigation}) => {
        return {
            headerRight:
                <View>
                    <LogoArea/>
                </View>,
            headerLeft:
                <View style={styles.drawerButton}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <View>
                            <SvgUri
                                width={'24'}
                                height={'24'}
                                source={require('../Assets/image/three-lines.svg')}
                                strokeWidth={10}
                                stroke={'#000'}
                                strokeLinejoin={'bevel'}
                                fill={'#e45'}
                            />
                        </View>
                    </TouchableOpacity>
                </View>,
            headerStyle:{backgroundColor: 'red'}
        }
    };
    
    
    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', 'NO-ID');
        return (
            <ThemeContext.Consumer>
                
                {(theme) => (
                    <TabNavigatorContext.Consumer>
                        {(tabTheme) =>
                            <View style={[styles.lightStyle, {backgroundColor: theme.backgroundColor}]}>
                                <Text>{JSON.stringify(item)}</Text>
                                <RouteTabNavigator tabTheme={tabTheme.backgroundColor}/>
                            </View>
                        }
                    </TabNavigatorContext.Consumer>
                )}
            </ThemeContext.Consumer>
        );
    }
}

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
