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
            region:null,
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
        
        const region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }

        this.setState({location: location, region:region})


    }
    componentDidMount() {   
        this.getLocation()
    }


    render() {
        //console.log(this.state.location)
        //console.log(this.state.region)
        
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
                    initialRegion={this.state.region}
                    
                    showsUserLocation={true}
                    followsUserLocation={true}
                >
                </MapView>
            </View>
        )
    }
}