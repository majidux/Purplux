import React, {Component} from 'react';
import {View, StyleSheet, Text, Picker} from 'react-native';
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import Items from "../Component/Items";
import Done from "./Done";
import SendItem from "../Component/SendItem";
import Icon from "react-native-vector-icons/FontAwesome";
import Failed from "./Failed";


const gradientColor = '#f6f6f6';
const data = Array.from({length: 500});

class AddTodo extends Component {
    
    
    
    render() {
        return (
            <View style={this.state.theme ? [styles.className,{backgroundColor:'#585858'}] : [styles.className]}>
                
                {/*{data.map((_, i) => (*/}
                    {/*<View key={i} style={[styles.backGround,*/}
                        {/*{*/}
                            {/*opacity: (1 / 500) * (i + 1),*/}
                            {/*bottom: (500 - i),*/}
                        {/*}]}*/}
                    {/*/>*/}
                {/*))}*/}
                
                <View style={styles.inProgressTasksView}>
                    <View>
                        <Text style={styles.inProgressTasks}>Tasks in progress</Text>
                    </View>
                    <View>
                    
                    </View>
                </View>
                <Items/>
                <SendItem/>
            </View>
        );
    }
}

const RouteTabNavigator = createMaterialTopTabNavigator(
    {
        AddTodo: {
            screen: AddTodo,
            navigationOptions: {
                tabBarIcon: ({tintColor: color}) => (
                    <Icon name="list" size={30} color={color}/>
                )
            }
        },
        Done: {
            screen: Done,
            navigationOptions: {
                tabBarIcon: ({tintColor: color}) => (
                    <Icon name="thumbs-up" size={30} color={color}/>
                )
            }
        },
        Failed: {
            screen: Failed,
            navigationOptions: {
                tabBarIcon: ({tintColor: color}) => (
                    <Icon name="thumbs-down" size={30} color={color}/>
                )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#8979f3',
            inactiveTintColor: '#949494',
            showIcon: true,
            showLabel: false,
            labelStyle: {
                fontSize: 12,
                fontWeight: '700'
            },
            tabStyle: {
                flex:1
            },
            style: {
                backgroundColor: '#e7e7e7',
            },
        }
    }
);

export default createAppContainer(RouteTabNavigator)

const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor: '#f6f6f6'
    },
    backGround: {
        position: 'absolute',
        backgroundColor: gradientColor,
        height: 1,
        right: 0,
        left: 0,
        zIndex: -2,
    },
    inProgressTasks:{
        fontSize: 20,
        fontWeight: '600',
        color:'#8979f3'
    },
    inProgressTasksView:{
        marginTop:20,
        marginLeft:30,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    }
});
