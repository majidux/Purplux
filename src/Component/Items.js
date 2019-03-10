import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {addTodo, getUsersData, deleteTodo, _delete} from "../Service/fetchApi/fetchAction";


class Items extends Component {
    
    componentDidMount() {
        this.props.getUsersData();
    }
    
    // deleteButton = (id) => {
    //     this.props.deleteTodo(id)
    // };
    
    deleteItem = (id, index) => {
        this.props.deleteTodo(id, index);
    };
    
    emptyList = () => <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text
        style={{fontSize: 30}}>The List is Empty</Text></View>
    
    
    render() {
        let todoList = this.props.todo.todoData;
        return (
            <View style={styles.flatListView}>
                <FlatList
                    data={todoList}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={this.emptyList}
                    renderItem={({item, index}) =>
                        <View style={[styles.todoView]}>
                            <View>
                                <Text
                                    style={styles.textName}>{item.name.slice(0, 18)}{item.name.length > 18 && '...'}</Text>
                                <Text style={styles.textName}>{item.id}</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={this.deleteItem.bind(this, item.id, index)}>
                                    <View style={styles.deleteView}>
                                        <Text style={styles.textSaveDelete}>DELETE</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
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
        borderRadius: 20,
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
export default connect(mapStateToProps, {getUsersData, addTodo, deleteTodo, _delete})(Items)
