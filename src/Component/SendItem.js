import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {addTodo, getUsersData} from "../Service/fetchApi/fetchAction";
import {ThemeContext} from "./themes-context";

class SendItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
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
            this.setState({name: ''})
        }
    };
    
    render() {
        return (
            <ThemeContext.Consumer>
                {(theme) =>
                    <View style={[styles.inputText,{backgroundColor:theme.inputBackground}]}>
                        <View style={styles.textInputView}>
                            <TextInput value={this.state.name} placeholder={'Add your Tasks to do ...'}
                                       onSubmitEditing={this.addName} placeholderTextColor={theme.placeholderTextColor}
                                       onChangeText={this.addName}
                                       style={[styles.todoInput,{backgroundColor:theme.inputArea, color:theme.fontColor}]}
                            />
                        </View>
                        <View style={styles.sendButtonViewStyle}>
                            <TouchableOpacity onPress={this.sendButton}>
                                <View style={[styles.sendView,{backgroundColor:theme.saveButton}]}>
                                    <Text style={styles.textSaveDelete}>SAVE</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </ThemeContext.Consumer>
        
        
        );
    }
}

const styles = StyleSheet.create({
    textName: {
        color: '#000',
        fontSize: 20,
        fontWeight: '600'
    },
    textSaveDelete: {
        color: '#fff',
        fontWeight: '800'
    },
    inputText: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textTitle: {
        color: '#4c4c4c',
        fontSize: 25
    },
    
    sendView: {
        backgroundColor: '#8979f3',
        alignSelf: 'flex-end',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 5,
    },
    textInputView: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        flex: 1
    },
    sendButtonViewStyle: {
        // flex:1
    },todoInput:{
        borderRadius:5,
        fontSize:16,
        justifyContent: 'center'
    }
    
});

const mapStateToProps = (state) => {
    return {
        todo: state.getDataReducer,
    }
};
export default connect(mapStateToProps, {getUsersData, addTodo})(SendItem)

