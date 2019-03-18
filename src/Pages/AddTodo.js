import React, {Component} from 'react';
import {View, StyleSheet, Text, Picker} from 'react-native';
import Items from "../Component/Items";
import SendItem from "../Component/SendItem";
import {connect} from "react-redux";
import {ThemeContext} from "../Component/themes-context";
import {TabNavigatorContext} from "../Component/tabNavigator-context";


const gradientColor = '#f6f6f6';
const data = Array.from({length: 500});

class AddTodo extends Component {
    
    
    render() {
        return (
            <ThemeContext.Consumer>
                {(theme) => (
                    <View style={[styles.className,{backgroundColor: theme.backgroundColor}]}>
                        <View style={styles.inProgressTasksView}>
                            <View>
                                <TabNavigatorContext.Consumer>
                                    {(tabTheme)=>
                                        <Text style={[styles.inProgressTasks,{color:tabTheme.color}]}>Tasks in progress</Text>
                                    }
                                </TabNavigatorContext.Consumer>
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
        color: '#8979f3'
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
