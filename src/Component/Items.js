import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    ActivityIndicator,
    Alert,
    Modal,
    Button,
    Animated,
    Dimensions, PanResponder
} from 'react-native';
import {connect} from "react-redux";
import {
    addTodo,
    getTaskDataUnfinished,
    deleteTodo,
    updateStatus,
    updateFailure
} from "../Service/fetchApi/fetchAction";
import {ThemeContext} from "./themes-context";
import AntIcon from 'react-native-vector-icons/AntDesign'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import ModalComponent from "./ModalComponent";

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

class Items extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Alert_Visibility: false,
            id: '',
        }
    }
    
    options = (id) => {
        this.setState({Alert_Visibility: !this.state.Alert_Visibility});
        this.setState({id: id});
    };
    
    componentDidMount() {
        this.props.getUsersDataUnfinished();
    }
    
    visible = () => {
        this.setState({Alert_Visibility: !this.state.Alert_Visibility});
    };
    
    render() {
        let todoList = this.props.todo.todoData;
        return (
            
            <ThemeContext.Consumer>
                {(theme) => (
                    <View style={[styles.flatListView]}>
                        
                        <ModalComponent id={this.state.id} visible={this.visible.bind(this)} options ={this.options.bind(this)} Alert_Visibility={this.state.Alert_Visibility}/>
                        
                        <View>
                            {this.props.todo.loading && <ActivityIndicator size={'large'} color={'#8979f3'}/>}
                        </View>
                        
                        <FlatList
                            data={todoList}
                            extraData={todoList}
                            onRefresh={() => this.props.getUsersDataUnfinished()}
                            refreshing={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) =>
                                <TouchableOpacity underlayColor={'#8979f3'} activeOpacity={0.7}
                                                  onLongPress={this.options.bind(this, item.id)}>
                                    <View style={[styles.todoView, {
                                        backgroundColor: theme.items,
                                        borderColor: '#94a4c1',
                                        borderBottomWidth: 1,
                                    }]}>
                                        <View style={styles.titleView}>
                                            <View>
                                                <Text
                                                    style={[styles.textName, {color: theme.fontColor}]}>{item.name}</Text>
                                            </View>
                                            <View>
                                                <Text style={[styles.dateTimeTextStyle]}>{item.date}</Text>
                                                <Text
                                                    style={[styles.dateTimeTextStyle, {color: '#30a830'}]}>{item.time}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    </View>
                )}
            </ThemeContext.Consumer>
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
        paddingVertical: 2,
        borderRadius: 15,
        marginVertical: 5,
        alignItems: 'center',
        flex: 2
    },
    
    _doneView: {
        paddingVertical: 2,
        borderRadius: 15,
        marginVertical: 5,
        alignItems: 'center',
        marginRight: 15,
        justifyContent: 'center',
        flex: 1
    },
    failedView: {
        paddingVertical: 2,
        borderRadius: 15,
        marginVertical: 5,
        alignItems: 'center',
        marginRight: 15,
        justifyContent: 'center',
        flex: 2
    },
    textDone: {
        color: '#3d3d3d',
        fontWeight: '800'
    },
    buttonOptions: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateTimeTextStyle: {
        color: '#e45',
        fontWeight: '600',
        fontSize: 12,
    },
    alertStyle: {
        backgroundColor: 'red',
        color: '#e45'
    },
    Alert_Main_View: {
        
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#8979f3",
        height: 200,
        width: deviceWidth - 20,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 7,
        position: 'absolute',
        zIndex: 2
        
    },
    
    Alert_Title: {
        fontSize: 25,
        color: "#fff",
        textAlign: 'center',
    },
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 5,
        top: 5
    },
    
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        // marginTop: -5
    },
    whiteLine: {
        width: deviceWidth,
        height: 2,
        backgroundColor: '#fff'
    },
    modalViewInside: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalTitleView: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
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
