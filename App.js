
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



import {createAppContainer} from 'react-navigation'
// bottom tab navigator
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'


// screens
import Places from './screens/Places'
import Settings from './screens/Settings'
import Map from './screens/Map';

// stack navigator
import MyStack from './screens/MyStack'

// redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'



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


const initialState = {
    language: 'esp' // en y esp soportados
}


const reducer = (state=initialState, action) => {
    switch(action.type)
    {
        case 'CHANGE_ENGLISH':
            return {counter: state.counter, language: 'en'}
        case 'CHANGE_SPANISH':
            return {counter: state.counter, language: 'esp'}
        case 'CHANGE_GERMAN':
            return {counter: state.counter, language: 'de'}
    }
    return state
}

const store = createStore(reducer)

export default class App extends React.Component {
    render() {

        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Tab.Navigator initialRouteName="Places">
                        <Tab.Screen 
                            name="Map" 
                            component={Map} 
                            options={{
                                tabBarLabel:"",
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
                                tabBarLabel:"",
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
                                tabBarLabel:"",
                                tabBarIcon: ({ tintColor}) => (
                                    <View>
                                        <Icon style={[{color: tintColor}]} size={25} name={'settings-outline'}></Icon>
                                    </View>
                                ),
                            }}
                            />
                    </Tab.Navigator>
                </NavigationContainer>
            </Provider>
          )    
    }
    
}