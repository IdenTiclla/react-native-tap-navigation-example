import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'

//Lists 
import en from '../src/en.json'
import es from '../src/es.json'

//redux
import {connect} from 'react-redux'

// Image
import { Image } from 'react-native-elements'



function mapStateToProps(state)  {
    return {
        language: state.language
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


class Map extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            location: null,
            region:null,
            errorMessage: '',
            userLocation : {

            },
            placesSpanish: es,
            placesEnglish: en,
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
        if (!this.state.location) {
            return (
                <View></View>
            )
        }
        else {
            if (this.props.language === "esp") {
                return (
                    <View style={styles.container}>
                        <MapView
                            style={styles.map}
                            initialRegion={this.state.region}
                            showsUserLocation={true}
                            followsUserLocation={true}
                        >
                        {this.state.placesSpanish.map(place => (
                            <Marker
                                key={place.id}
                                coordinate={{
                                    latitude: place.latitude,
                                    longitude: place.longitude
                                }}
                                title={place.title}
                            />
                        ))}

                        </MapView>
                    </View>
                )
            } else if (this.props.language==="en") {
                return (
                    <View style={styles.container}>
                        <MapView
                            style={styles.map}
                            initialRegion={this.state.region}
                            showsUserLocation={true}
                            followsUserLocation={true}
                        >
                        {this.state.placesEnglish.map(place => (
                            <Marker
                                key={place.id}
                                coordinate={{
                                    latitude: place.latitude,
                                    longitude: place.longitude
                                }}
                                title={place.title}
                            />
                        ))}

                        </MapView>
                    </View>
                )
            }
        }

        
    }
}
export default connect(mapStateToProps)(Map)