import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getUsersData} from "../Service/fetchApi/fetchAction";
import {add, addTodo} from '../Service/addTodo/addAction';

const gradientColor = '#402659';
const data = Array.from({length: 500});

class AddTodo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }
    
    componentDidMount() {
        this.props.getUsersData();
    }
    
    
    addName = (name) => {
        this.setState({name: name})
    };
    
    
    sendButton = () => {
        if (!this.state.name.length) {
            return;
        } else {
            let name = this.state.name;
            this.props.addTodo(name);
            this.props.getUsersData();
        }
    };
    
    
    render() {
        let todoList = this.props.todo.todoData;
        return (
            <View style={styles.className}>
                
                {data.map((_, i) => (
                    <View key={i} style={[styles.backGround,
                        {
                            opacity: (1 / 500) * (i + 1),
                            bottom: (500 - i),
                        }]}
                    />
                ))}
                
                <View style={styles.inputText}>
                    <Text style={styles.textTitle}>Type your task</Text>
                    <View style={styles.textInputView}>
                        <TextInput value={this.state.name} placeholder={'Add your Tasks to do'} onSubmitEditing={this.addName} placeholderTextColor={'#474747'} onChangeText={this.addName}/>
                    </View>
                    
                    <TouchableOpacity onPress={this.sendButton}>
                        <View style={styles.sendView}>
                            <Text style={styles.textSaveDelete}>SAVE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.flatListView}>
                    <FlatList
                        data={todoList}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) =>
                            <View style={styles.todoView}>
                                <View>
                                    <Text style={styles.textName}>{item.name}</Text>
                                    <Text style={styles.textUsername}>{item.username}</Text>
                                </View>
                                <TouchableOpacity>
                                    <View style={styles.deleteView}>
                                        <Text style={styles.textSaveDelete}>DELETE</Text>
                                    </View>
                                </TouchableOpacity>
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
        backgroundColor: '#5a3c6a'
    },
    todoView: {
        flex: 1,
        marginVertical: 20,
        backgroundColor: '#5a3c6a',
        padding: 30,
        borderRadius: 20,
        elevation: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    backGround: {
        position: 'absolute',
        backgroundColor: gradientColor,
        height: 1,
        right: 0,
        left: 0,
        zIndex: -2,
    },
    textName: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'sanserif'
    },
    textUsername: {
        color: '#96b81d',
        fontWeight: '800',
        fontFamily: 'sanserif'
    },
    textSaveDelete: {
        color: '#fff',
        fontWeight: '800',
        fontFamily: 'sanserif'
    },
    inputText: {
        paddingHorizontal: 20,
        marginTop: 10
    },
    textTitle: {
        color: '#f2f2f2',
        fontSize: 25
    },
    flatListView: {
        flex: 1
    },
    sendView: {
        backgroundColor: '#96b81d',
        alignSelf: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25
    },
    deleteView: {
        backgroundColor: '#ff374a',
        alignSelf: 'flex-end',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15
    },
    textInputView:{
        backgroundColor:'#fff',
        borderRadius:10,
        marginVertical: 10
    }
});
const mapStateToProps = (state) => {
    return {
        todo: state.getDataReducer,
    }
};
export default connect(mapStateToProps, {getUsersData, addTodo})(AddTodo)
