import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'




class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screeen</Text>
            </View>
        )
    }
}

class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Screeen</Text>
            </View>
        )
    }
}

class HistoryScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>History Screeen</Text>
            </View>
        )
    }
}

class CartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Cart Screeen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}></Icon>
                    </View>
                )
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}></Icon>
                    </View>
                )
            }
        },
        History: {
            screen: HistoryScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}></Icon>
                    </View>
                )
            }
        },
        Cart: {
            screen: CartScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'compass-outline'}></Icon>
                    </View>
                )
            }
        },
    },

    {
        initialRouteName: 'Home',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
    }
)

// para cambiar iconos ve a la pagina ionicons 

export default createAppContainer(TabNavigator)