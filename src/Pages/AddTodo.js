import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList,Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {getUsersData} from "../Service/fetchApi/fetchAction";

const gradientHeight = 500;
const gradientColor = '#402659';
const data = Array.from({length: gradientHeight});

class AddTodo extends Component {
    componentDidMount(){
        this.props.getUsersData();
    }
    
    render() {
        let todoList = this.props.todo.todoData;
        return (
            <View style={styles.className}>
                
                
                {data.map((_, i) => (
                    <View key={i} style={[styles.backGround,
                        {
                            opacity: (1 / gradientHeight) * (i + 1),
                            bottom: (gradientHeight - i),
                        }]}
                    />
                ))}
                
                
                <Text>CheckList</Text>
                <View style={styles.flatListView}>
                    <FlatList
                        data={todoList}
                        keyExtractor={(item)=>item.id.toString()}
                        renderItem={({item})=>
                            <View style={styles.todoView}>
                                <View>
                                    <Text style={styles.textTodo}>{item.name}</Text>
                                </View>
                                <View>
                                    <Text>DELETE</Text>
                                </View>
                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor:'#5a3c6a'
    },
    todoView:{
        flex:1,
        marginVertical:20,
        backgroundColor:'#5a3c6a',
        padding:30,
        borderRadius:20,
        elevation:10,
        marginHorizontal:30,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    backGround: {
        position: 'absolute',
        backgroundColor: gradientColor,
        height: 1,
        right: 0,
        left: 0,
        zIndex: 2,
    },
    textTodo:{
        color:'#fff',
        fontSize:20,
        fontFamily:'sanserif'
    }
});
const mapStateToProps =(state)=>{
    return{
        todo:state.getDataReducer
    }
};
export default connect(mapStateToProps,{getUsersData})(AddTodo)
