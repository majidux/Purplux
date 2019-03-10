import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity,ActivityIndicator} from 'react-native';
import {connect} from "react-redux";
import {addTodo, getUsersDataUnfinished, deleteTodo,updateStatus} from "../Service/fetchApi/fetchAction";


class Items extends Component {
    
    
    completeTask=(id)=>{
          this.props.updateStatus(id)
    };
    
    componentDidMount() {
        this.props.getUsersDataUnfinished();
    }
    
    deleteItem = (id) => {
        this.props.deleteTodo(id);
    };
    
    emptyList = () =>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 30}}>The List is Empty</Text>
        </View>;
    
    
    render() {
        let todoList = this.props.todo.todoData;
        return (
            <View style={styles.flatListView}>
                {this.props.todo.loading && <ActivityIndicator size={'large'} color={'red'}/>}
                
                <FlatList
                    data={todoList}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={this.emptyList}
                    renderItem={({item}) =>
                        <View style={styles.todoView}>
                            <View>
                                <Text style={styles.textName}>{item.name}</Text>
                                <Text style={styles.textName}>{item.id}</Text>
                                <Text style={styles.textName}>{item.isComplete.toString()}</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={this.deleteItem.bind(this, item.id)}>
                                    <View style={styles.deleteView}>
                                        <Text style={styles.textSaveDelete}>DELETE</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.completeTask.bind(this,item.id)}>
                                    <View style={styles._doneView}>
                                        <Text style={styles.textDone}>DONE</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todoView: {
        flex: 1,
        marginVertical: 5,
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 1,
        elevation: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    flatListView: {
        flex: 1
    },
    textName: {
        color: '#000',
        fontSize: 20,
        fontWeight: '600'
    },
    textUsername: {
        color: '#96b81d',
        fontWeight: '800'
    },
    textSaveDelete: {
        color: '#fff',
        fontWeight: '800'
    },
    deleteView: {
        backgroundColor: '#ff374a',
        alignSelf: 'flex-end',
        paddingVertical: 2,
        borderRadius: 15,
        marginVertical: 5,
        width: 80,
        alignItems: 'center'
    },
    
    _doneView: {
        backgroundColor: '#56c42f',
        alignSelf: 'flex-end',
        paddingVertical: 2,
        borderRadius: 15,
        marginVertical: 5,
        width: 80,
        alignItems: 'center',
    },
    textDone: {
        color: '#3d3d3d',
        fontWeight: '800'
    }
});

const mapStateToProps = (state) => {
    return {
        todo: state.getDataReducer,
    }
};
export default connect(mapStateToProps, {getUsersDataUnfinished, addTodo, deleteTodo,updateStatus})(Items)
