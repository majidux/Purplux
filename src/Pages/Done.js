import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {connect} from 'react-redux'
import {getUsersDataUnfinished} from '../Service/fetchApi/fetchAction'

class Done extends Component {
    
    
    render() {
        let data = this.props.todo.todoData;
        return (
            <View style={styles.className}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) =>
                        item.isComplete &&
                        <View style={styles.flatListInside}>
                            <Text style={styles.listText}>{item.name}</Text>
                            <Text style={styles.listText}>{item.isComplete.toString()}</Text>
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
        backgroundColor: '#f5f5f5',
        padding: 30
    },
    flatListInside: {
        marginVertical: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    listText: {
        color: '#000',
        fontSize: 20
    }
});
const mapStateToProps = (state) => ({
    todo: state.getDataReducer,
});

export default connect(mapStateToProps, {getUsersDataUnfinished})(Done);
