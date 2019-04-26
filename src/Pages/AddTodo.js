import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Items from "../Component/Items";
import SendItem from "../Component/SendItem";
import {connect} from "react-redux";
import {ThemeContext} from "../Component/themes-context";
import AsyncStorage from "react-native/Libraries/Storage/AsyncStorage";


const gradientColor = '#f6f6f6';
const data = Array.from({length: 500});

class AddTodo extends Component {
    
    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
    };
    
    render() {
        return (
            <ThemeContext.Consumer>
                {(theme) => (
                    <View style={[styles.className, {backgroundColor: theme.backgroundColor}]}>
                        <View style={styles.inProgressTasksView}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flex: 1,
                                paddingRight: 15
                            }}>
                                <Text style={[styles.inProgressTasks]}>Tasks in progress</Text>
                                <TouchableOpacity
                                    onPress={this._logOut}
                                >
                                    <Text style={{color: 'red', fontSize: 15}}>Log out</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                            
                            </View>
                        </View>
                        <Items/>
                        <SendItem/>
                    </View>
                )}
            </ThemeContext.Consumer>
        );
    }
}


const styles = StyleSheet.create({
    className: {
        flex: 1,
    },
    backGround: {
        position: 'absolute',
        backgroundColor: gradientColor,
        height: 1,
        right: 0,
        left: 0,
        zIndex: -2,
    },
    inProgressTasks: {
        fontSize: 20,
        fontWeight: '600',
        color: '#8979f3',
        fontFamily: 'Roboto'
    },
    inProgressTasksView: {
        marginTop: 20,
        marginLeft: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }
});
const mapStateToProps = (state) => {
    return {
        theme: state.userReducer,
    }
};
export default connect(mapStateToProps)(AddTodo)
