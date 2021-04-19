import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import MapView, { Marker } from 'react-native-maps';
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import * as Location from 'expo-location'


class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            location: null,
            errorMessage: '',
            userLocation : {

            }
        }

        this.getLocation = this.getLocation.bind(this)
    }

    getLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permissions not granted'
            })
            return;

        }
        let location = await Location.getCurrentPositionAsync({})
        this.setState({location: location})


    }

    componentDidMount() {
        this.getLocation()
    }


    render() {
        console.log(JSON.stringify(this.state.location))
        console.log('device connected')
        console.log('--------------------')
        console.log('mensage de error' + this.state.errorMessage)
        console.log(this.state.location)
        
        console.log(typeof(this.state.loca))
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -17.78686,
                        longitude: -63.1960,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    
                    showsUserLocation={true}
                    followsUserLocation={true}
                >
                </MapView>
            </View>
        )
    }
}

class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Screeen</Text>
                <Text>Updated profile screen</Text>
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