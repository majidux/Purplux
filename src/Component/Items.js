import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import {connect} from "react-redux";
import {
    addTodo,
    getTaskDataUnfinished,
    deleteTodo,
    updateStatus,
    updateFailure
} from "../Service/fetchApi/fetchAction";
import SvgUri from "react-native-svg-uri";


class Items extends Component {
    
    
    
    completeTask = (id) => {
        this.props.updateStatus(id)
    };
    
    failedTask = (id) => {
        this.props.updateFailure(id)
    }
    
    componentDidMount() {
        this.props.getUsersDataUnfinished();
    }
    
    deleteItem = (id) => {
        this.props.deleteTodo(id);
    };
    
    render() {
        let todoList = this.props.todo.todoData;
        return (
            <View style={styles.flatListView}>
                <View style={styles.activityIndicator}>
                    {this.props.todo.loading && <ActivityIndicator size={'large'} color={'#8979f3'}/>}
                </View>
                
                
                <FlatList
                    data={todoList}
                    onRefresh={()=>this.props.getUsersDataUnfinished()}
                    refreshing={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>
                        item.isComplete || item.isFail &&
                        <View style={styles.todoView}>
                            <View style={styles.titleView}>
                                <Text style={styles.textName}>{item.name}</Text>
                            </View>
                            <View style={styles.buttonOptions}>
                                <TouchableOpacity onPress={this.failedTask.bind(this, item.id)}>
                                    <View style={styles._doneView}>
                                        <SvgUri
                                            width={'24'}
                                            height={'24'}
                                            source={require('../Assets/image/close-button.svg')}
                                            strokeWidth={10}
                                            stroke={'#000'}
                                            strokeLinejoin={'bevel'}
                                            fill={'#e45'}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.completeTask.bind(this, item.id)}>
                                    <View style={styles._doneView}>
                                        <SvgUri
                                            width={'24'}
                                            height={'24'}
                                            source={require('../Assets/image/checked.svg')}
                                            strokeWidth={10}
                                            stroke={'#000'}
                                            strokeLinejoin={'bevel'}
                                            fill={'#57b993'}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.deleteItem.bind(this, item.id)}>
                                    <View style={styles.deleteView}>
                                        <SvgUri
                                            width={'24'}
                                            height={'24'}
                                            source={require('../Assets/image/trash.svg')}
                                            strokeWidth={10}
                                            stroke={'#000'}
                                            strokeLinejoin={'bevel'}
                                            fill={'#8979f3'}
                                        />
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
        elevation: 2,
        marginHorizontal: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    flatListView: {
        flex: 1,
        paddingTop: 15
    },
    textName: {
        color: '#4d4d4d',
        fontSize: 16,
        fontWeight: '500'
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
        alignSelf: 'flex-end',
        paddingVertical: 2,
        borderRadius: 15,
        marginVertical: 5,
        width: 20,
        alignItems: 'center',
    },
    
    _doneView: {
        alignSelf: 'flex-end',
        paddingVertical: 2,
        borderRadius: 15,
        marginVertical: 5,
        width: 20,
        alignItems: 'center',
        marginRight: 20
    },
    textDone: {
        color: '#3d3d3d',
        fontWeight: '800'
    },
    buttonOptions: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
    },
    titleView:{
        flex:1
    }
});

const mapStateToProps = (state) => {
    return {
        todo: state.getDataReducer,
    }
};
export default connect(mapStateToProps, {
    getUsersDataUnfinished: getTaskDataUnfinished,
    addTodo,
    deleteTodo,
    updateStatus,
    updateFailure
})(Items)
