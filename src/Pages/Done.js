import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {connect} from 'react-redux'
import {getUsersDataUnfinished} from '../Service/fetchApi/fetchAction'

class Done extends Component {
    
    render() {
        let data=this.props.todo.todoData;
        return (
            <View style={styles.className}>
                <FlatList
                    data={data}
                    renderItem={({item})=>
                        <View>
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
        backgroundColor: '#99ff21',
    }
});
const mapStateToProps = (state) => ({
    todo: state.getDataReducer,
});

export default connect(mapStateToProps,{getUsersDataUnfinished})(Done);
