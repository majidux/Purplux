import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {addTodo, getUsersData} from "../Service/fetchApi/fetchAction";

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
            <View style={styles.inputText}>
                <Text style={styles.textTitle}>Tasks in Progress</Text>
                <View style={styles.textInputView}>
                    <TextInput value={this.state.name} placeholder={'Add your Tasks to do ...'}
                               onSubmitEditing={this.addName} placeholderTextColor={'#474747'}
                               onChangeText={this.addName}
                    />
                </View>
                <TouchableOpacity onPress={this.sendButton}>
                    <View style={styles.sendView}>
                        <Text style={styles.textSaveDelete}>ADD</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
        marginVertical: 10
    },
    textTitle: {
        color: '#4c4c4c',
        fontSize: 25
    },
    
    sendView: {
        backgroundColor: '#474747',
        alignSelf: 'flex-end',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25
    },
    textInputView: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10
    }
});

const mapStateToProps = (state) => {
    return {
        todo: state.getDataReducer,
    }
};
export default connect(mapStateToProps, {getUsersData, addTodo})(SendItem)

