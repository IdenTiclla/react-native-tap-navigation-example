import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'

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


export default class Map extends React.Component {
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
        /*
        console.log(JSON.stringify(this.state.location))
        console.log('device connected')
        console.log('--------------------')
        console.log('mensage de error' + this.state.errorMessage)
        console.log(this.state.location)
        
        console.log(typeof(this.state.loca))
        */
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