
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import { StatusBar } from 'expo-status-bar';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'



import Places from './screens/Places'
import Settings from './screens/Settings'
import Map from './screens/Map';






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
        Map: {
            screen: Map,
            navigationOptions: {
                tabBarIcon: ({ tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'compass-outline'}></Icon>
                    </View>
                )
            }
        },
        Places: {
            screen: Places,
            navigationOptions: {
                tabBarIcon: ({ tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'newspaper-outline'}></Icon>
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#a3c2fa',
                barStyle: { backgroundColor: '#2163f6' },
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                tabBarIcon: ({ tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'settings-outline'}></Icon>
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#92c5c2',
                barStyle: { backgroundColor: '#2c6d6a' },
                
            }
        },
        
    },

    {
        initialRouteName: 'Map',
        activeColor: '#ffffff',
        inactiveColor: '#bda1f7',
        barStyle: { backgroundColor: '#6948f4' },
    }
)

// para cambiar iconos ve a la pagina ionicons 

export default createAppContainer(TabNavigator)