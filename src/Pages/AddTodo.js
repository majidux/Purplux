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
                <Text>List</Text>
                <FlatList
                    data={todoList}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item})=>
                        <View style={styles.todoView}>
                            <Text>{item.name}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor:'#865a9a'
    },
    todoView:{
        flex:1,
        backgroundColor:'pink'
    },
    backGround: {
        position: 'absolute',
        backgroundColor: gradientColor,
        height: 1,
        right: 0,
        left: 0,
        zIndex: 2,
    },
});
const mapStateToProps =(state)=>{
    return{
        todo:state.getDataReducer
    }
};
export default connect(mapStateToProps,{getUsersData})(AddTodo)
