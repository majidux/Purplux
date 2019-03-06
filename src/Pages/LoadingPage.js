import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getUsersData} from "../Service/fetchApi/fetchAction";
class LoadingPage extends Component {
    componentDidMount(){
        this.props.getUsersData();
    }
    
    render() {
        let todoList = this.props.todo.todoData;
        return (
            <View style={styles.className}>
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
    },
    todoView:{
        flex:1,
        backgroundColor:'pink'
    }
});
const mapStateToProps =(state)=>{
    return{
        todo:state.getDataReducer
    }
};
export default connect(mapStateToProps,{getUsersData})(LoadingPage)
