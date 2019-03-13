import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {connect} from 'react-redux'
import {getUsersDataUnfinished} from '../Service/fetchApi/fetchAction'

class Failed extends Component {
    render() {
        let data = this.props.todo.todoData;
        return (
            <View style={styles.className}>
                <View>
                    <Text style={styles.pageTitle}>Failed Tasks</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) =>
                        !item.isFail &&
                        <View style={styles.flatListInside}>
                            <View style={styles.titleTaskView}>
                                <Text style={styles.listText}>{item.name}</Text>
                            </View>
                            <View style={styles.statusTaskView}>
                                <Text style={styles.statusTaskText}>Failed</Text>
                            </View>
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
        marginHorizontal: 30,
        marginTop:20
    },
    flatListInside: {
        marginVertical: 20,
        flex: 1,
        padding: 15,
        borderRadius: 1,
        elevation: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    
    listText: {
        color: '#000',
        fontSize: 20
    },
    statusTaskText:{
        color: '#fff',
        fontSize: 15
    },
    titleTaskView: {
        flex:4,
    },
    statusTaskView:{
        flex:1,
        backgroundColor:'#e45',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    pageTitle:{
        fontSize: 20,
        fontWeight: '600',
        color:'#e45'
    }
});
const mapStateToProps = (state) => ({
    todo: state.getDataReducer,
});

export default connect(mapStateToProps, {getUsersDataUnfinished})(Failed);

