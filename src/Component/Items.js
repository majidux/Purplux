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

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

class Items extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Alert_Visibility: false,
            id: '',
            pan: new Animated.ValueXY(),
            state: ''
        }
    }
    
    options = (id) => {
        this.setState({Alert_Visibility: !this.state.Alert_Visibility});
        this.setState({id: id});
    };
    completeTask = (id) => {
        this.props.updateStatus(id);
        this.setState({Alert_Visibility: !this.state.Alert_Visibility});
    };
    
    failedTask = (id) => {
        this.props.updateFailure(id);
        this.setState({Alert_Visibility: !this.state.Alert_Visibility});
    };
    
    componentDidMount() {
        this.props.getUsersDataUnfinished();
    }
    
    deleteItem = (id) => {
        this.props.deleteTodo(id);
        this.setState({Alert_Visibility: !this.state.Alert_Visibility});
    };
    
    componentWillMount() {
        this.panResponder = PanResponder.create({
            onPanResponderGrant: (evt, gestureState) => {
                this.setState({Alert_Visibility: !this.state.Alert_Visibility});
                this.setState({state: evt.nativeEvent.pageX})
            }
        })
    }
    
    visible = () => {
        this.setState({Alert_Visibility: !this.state.Alert_Visibility});
    };
    
    render() {
        let todoList = this.props.todo.todoData;
        let handles = this.panResponder.panHandlers;
        return (
            
            <ThemeContext.Consumer>
                {(theme) => (
                    <View style={[styles.flatListView]}{...handles}>
                         <Modal
                                hardwareAccelerated={true}
                                visible={this.state.Alert_Visibility}
                                animated={true}
                                transparent={true}
                                animationType={'fade'}
                                onRequestClose={() => {
                                    this.options((!this.state.Alert_Visibility))
                                }}
                            >
                                <View style={styles.modalViewInside}>
                                    
                                    <View style={styles.Alert_Main_View}>
                                        <View style={styles.modalTitleView}>
                                            <Text style={styles.Alert_Title}>What do you want to do ?</Text>
                                        </View>
                                        <View style={styles.whiteLine}/>
                                        
                                        <View style={styles.buttonOptions}>
                                            <View style={styles.failedView}>
                                                <TouchableOpacity
                                                    onPress={this.failedTask.bind(this, this.state.id)}
                                                >
                                                    
                                                    <AntIcon size={32} name={'closecircle'} color={'#e45'}/>
                                                
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles._doneView}>
                                                <TouchableOpacity
                                                    onPress={this.completeTask.bind(this, this.state.id)}
                                                >
                                                    
                                                    <AwesomeIcon size={35} name={'check-circle'} color={'#57b993'}/>
                                                
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.deleteView}>
                                                <TouchableOpacity
                                                    onPress={this.deleteItem.bind(this, this.state.id)}
                                                >
                                                    <AwesomeIcon size={35} name={'trash'} color={theme.fontColor}/>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <TouchableOpacity
                                            style={styles.buttonStyle}
                                            onPress={this.options}
                                        >
                                            <AntIcon size={32} name={'close'} color={'#000'}/>
                                        </TouchableOpacity>
                                    </View>
                                
                                </View>
                             <TouchableHighlight
                                 underlayColor={'transparent'}
                                 onPress={this.visible}
                                 style={{
                                     position:'absolute',
                                     zIndex:-1 ,
                                     backgroundColor:'rgba(100,100,100,0.7)',
                                     width:deviceWidth,
                                     height:deviceHeight
                                 }}><Text></Text></TouchableHighlight>
                            </Modal>
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
                                <TouchableOpacity underlayColor={'#8979f3'} activeOpacity={0.7}onLongPress={this.options.bind(this, item.id)}>
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
                                                <Text style={[styles.dateTimeTextStyle,{color:'#30a830'}]}>{item.time}</Text>
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
        fontWeight:'600',
        fontSize:12,
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
        zIndex:2
        
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
