
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import { StatusBar } from 'expo-status-bar';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'

import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProfileScreen from './screens/ProfileScreen'
import HistoryScreen from './screens/HistoryScreen'






const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: 400,
      height: 810,
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
                ),
                activeColor: '#ffffff',
                inactiveColor: '#a3c2fa',
                barStyle: { backgroundColor: '#2163f6' },
            }
        },
        History: {
            screen: HistoryScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}></Icon>
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#92c5c2',
                barStyle: { backgroundColor: '#2c6d6a' },
                
            }
        },
        Cart: {
            screen: CartScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}></Icon>
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#ebaabd',
                barStyle: { backgroundColor: '#d13560' },
            }
        },
    },

    {
        initialRouteName: 'Home',
        activeColor: '#ffffff',
        inactiveColor: '#bda1f7',
        barStyle: { backgroundColor: '#6948f4' },
    }
)

// para cambiar iconos ve a la pagina ionicons 

export default createAppContainer(TabNavigator)