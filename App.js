
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import {createAppContainer} from 'react-navigation'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';




import Places from './screens/Places'
import Settings from './screens/Settings'
import Map from './screens/Map';

import MyStack from './screens/MyStack'






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



const Tab = createMaterialBottomTabNavigator()


export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen 
                        name="Map" 
                        component={Map} 
                        options={{
                            tabBarIcon: ({ tintColor}) => (
                                <View>
                                    <Icon 
                                        style={[{color: tintColor}]}
                                        size={25}
                                        name={'compass-outline'}></Icon>
                                </View>
                            )
                        }}
                        />
                    <Tab.Screen 
                        name="Places"
                        component={MyStack}
                        options={{
                            tabBarIcon: ({ tintColor}) => (
                                <View>
                                    <Icon 
                                        style={[{color: tintColor}]}
                                        size={25} 
                                        name={'newspaper-outline'}></Icon>
                                </View>
                            ),
                            
                        }}
                        />
                    <Tab.Screen 
                        name="Settings"
                        component={Settings}
                        options={{
                            tabBarIcon: ({ tintColor}) => (
                                <View>
                                    <Icon style={[{color: tintColor}]} size={25} name={'settings-outline'}></Icon>
                                </View>
                            ),
                        }}
                        />
                </Tab.Navigator>
            </NavigationContainer>
          )    
    }
    
}