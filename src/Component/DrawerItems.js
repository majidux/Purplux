import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {ThemeContext} from "./themes-context";
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

class DrawerItems extends Component {
    
    render() {
        let theme = this.context;
        return (
            <View style={[styles.className, {backgroundColor: theme.backgroundColor}]}>
                <View style={styles.titlePage}>
                    <Text style={{fontSize: 40,fontFamily:'serif',color:theme.fontColor}}>PURPLUX</Text>
                    {/*<Image*/}
                    {/*    source={require('../Assets/image/PurpleLogo.png')}*/}
                    {/*    style={{width:150,height:50}}*/}
                    {/*/>*/}
                </View>
                <View style={styles.itemsMenu}>
                    <View style={styles.itemMenu}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('Home');
                            this.props.navigation.closeDrawer()
                        }} style={{flexDirection: 'row'}}>
                            <View style={styles.itemMenuInside}>
                                <AntDesignIcon size={25} color={theme.fontColor} name={'home'}/>
                                <Text style={[styles.itemFont, {color: theme.fontColor}]}>Home</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemMenu}>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Setting')
                        }>
                            <View style={styles.itemMenuInside}>
                                <AntDesignIcon size={25} color={theme.fontColor} name={'setting'}/>
                                <Text style={[styles.itemFont, {color: theme.fontColor}]}>Setting</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemMenu}>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('About')
                        }>
                            <View style={styles.itemMenuInside}>
                                <AntDesignIcon size={25} color={theme.fontColor} name={'infocirlceo'}/>
                                <Text style={[styles.itemFont, {color: theme.fontColor}]}>About</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

DrawerItems.contextType = ThemeContext;

const styles = StyleSheet.create({
    className: {
        flex: 1,
        padding: 20
    },
    itemFont: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: '600'
    },
    titlePage: {
        flex: 1,
        borderBottomWidth:5,
        borderBottomColor: '#55f',
        alignItems: 'center'
    },
    itemsMenu: {
        flex: 2,
        paddingHorizontal: 10,
        paddingVertical: 50,
    },
    itemMenu: {
        marginVertical: 7
    },
    itemMenuInside: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
export default DrawerItems;
