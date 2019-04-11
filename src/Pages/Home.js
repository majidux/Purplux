import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, BackHandler, Alert, StatusBar} from 'react-native';
import RouteTabNavigator from '../Routes/AddTodoTopNavigator'
import {connect} from "react-redux";
import {ThemeContext} from "../Component/themes-context";
import Icon from "react-native-vector-icons/FontAwesome";

class Home extends Component {
    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
    }
    
    componentWillMount() {
        BackHandler.addEventListener('KARIM', this.buttonPress);
    }
    
    buttonPress = () => {
        Alert.alert(
            'Exit',
            'Do you want to exit From Purplux ?',
            [
                {text: 'Yes', onPress: () => BackHandler.exitApp()},
                {text: 'No'}
            ],
            {cancelable: false},
        );
        return true;
    };
    
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
            headerStyle: {backgroundColor: '#8979f3'}
        }
    };
    
    render() {
        let theme = this.context;
        return (
            <View style={{flex: 1}}>
                {/*<NavigationEvents*/}
                {/*    onWillFocus={payload => this.props.navigation.setParams({ctx: theme.backgroundColor})}*/}
                {/*    // onWillBlur={payload => this.props.navigation.setParams({ctx: theme.backgroundColor})}*/}
                {/*/>*/}
                <StatusBar backgroundColor={theme.tabNavigator} barStyle={theme.backgroundColor === '#f4f4f4' ? 'dark-content' :'light-content'}/>
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
    drawerTitle: {
        marginRight: 20
    },
    titleNavigator: {
        fontSize: 35,
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'cursive'
    }
});

const mapStateToProps = (state) => {
    return {
        change: state.userReducer,
    }
};
export default connect(mapStateToProps)(Home)
