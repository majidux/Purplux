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
                <View style={styles.drawerTitle}>
                    <Text style={styles.titleNavigator}>Purplux</Text>
                </View>,
            headerLeft:
                <ThemeContext.Consumer>
                    {(theme) => (
                        <View style={[styles.drawerButton]}>
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <View>
                                    <Icon name="bars" size={30} color={'#fff'}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </ThemeContext.Consumer>,
            // headerStyle: {backgroundColor: navigation.getParam('ctx', 'red')}
            headerStyle: {backgroundColor: '#8979f3'}
        }
    };
    
    render() {
        let theme = this.context;
        return (
            <View style={{flex:1}}>
                <NavigationEvents
                    onWillFocus={payload => this.props.navigation.setParams({ctx: theme.backgroundColor})}
                    // onWillBlur={payload => this.props.navigation.setParams({ctx: theme.backgroundColor})}
                />
                <View style={[styles.lightStyle, {backgroundColor: theme.inputBackground}]}>
        
                    <RouteTabNavigator/>
                </View>
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
    },
    drawerTitle:{
        marginRight:20
    },
    titleNavigator:{
        fontSize:28,
        color:'#fff',
        fontWeight:'600',
        fontFamily:'cursive'
    }
});

const mapStateToProps = (state) => {
    return {
        change: state.userReducer,
    }
};
export default connect(mapStateToProps)(Home)
