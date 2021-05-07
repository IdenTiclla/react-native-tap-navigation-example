import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PlaceCard from '../components/PlaceCard'
//location
import * as Location from 'expo-location'

// geolib
import {getPreciseDistance} from 'geolib'

//redux
import {connect} from 'react-redux'

// import languages

import en from '../src/en.json'
import es from '../src/es.json'
import de from '../src/de.json'

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
    places: {
        marginTop: 20,
    }
  });

class Places extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            placesSpanish: [],
            placesEnglish: [],
            placesGerman:[],
            errorMessage: '',
            location: null,
        }
    }

    _getLocation = async () => {
        console.log('get location executed')
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permissions not granted'
            })
            return;
        }
        let location = await Location.getCurrentPositionAsync({accuracy:6})
        console.log(location.coords.latitude + " , " + location.coords.longitude)
        const latitude = location.coords.latitude
        const longitude = location.coords.longitude
        this.setState({
            location: location,
            placesSpanish: es.sort(function(a,b){return getPreciseDistance({latitude:latitude, longitude:longitude},{latitude:a.latitude, longitude:a.longitude}) - getPreciseDistance({latitude:latitude, longitude:longitude},{latitude:b.latitude, longitude:b.longitude})}),
            placesEnglish: en.sort(function(a,b){return getPreciseDistance({latitude:latitude, longitude:longitude},{latitude:a.latitude, longitude:a.longitude}) - getPreciseDistance({latitude:latitude, longitude:longitude},{latitude:b.latitude, longitude:b.longitude})}),
            placesGerman: de.sort(function(a,b){return getPreciseDistance({latitude:latitude, longitude:longitude},{latitude:a.latitude, longitude:a.longitude}) - getPreciseDistance({latitude:latitude, longitude:longitude},{latitude:b.latitude, longitude:b.longitude})})
            
        })
    }

    componentDidMount() {
        this._getLocation()
        setInterval(()=> this._getLocation(), 20000)
    }

    // <PlaceCard onPressCard={()=> this.props.navigation.navigate('PlaceInfo',{person:{name:'iden', lastname:'ticlla'}})}></PlaceCard>
    render() {
        console.log('places renderizado')
        
        if (!this.state.location) {
            return (
                <View></View>
            )
        }
        else {
            const latitude = this.state.location.coords.latitude
            const longitude = this.state.location.coords.longitude
            if (this.props.language === "esp") {
                
                return (
                    <ScrollView style={styles.places}>
                        {this.state.placesSpanish.map(place => (
                            <PlaceCard 
                                place={place}
                                key={place.id}
                                latitude={latitude}
                                longitude={longitude}
                                txt="Distancia"
                                unit="Metros"
                                onPressCard={()=> this.props.navigation.navigate('PlaceInfo',{place: place})}
                                />
                        ))}
                    </ScrollView>
                )
            } else if (this.props.language==="en") {
                return (
                    <ScrollView style={styles.places}>
                        {this.state.placesEnglish.map(place => (
                            <PlaceCard 
                                place={place}
                                key={place.id}
                                latitude={latitude}
                                longitude={longitude}
                                txt="Distance"
                                unit="Meters"
                                onPressCard={()=> this.props.navigation.navigate('PlaceInfo',{place: place})}
                                />
                        ))}
                    </ScrollView>
                )
            }
            else if (this.props.language === "de"){
                return (
                    <ScrollView style={styles.places}>
                        {this.state.placesGerman.map(place => (
                            <PlaceCard 
                                place={place}
                                key={place.id}
                                latitude={latitude}
                                longitude={longitude}
                                txt="Entfernung"
                                unit="Meter"
                                onPressCard={()=> this.props.navigation.navigate('PlaceInfo',{place: place})}
                                />
                        ))}
                    </ScrollView>
                )
            }
        }
        
        
    }
}
export default connect(mapStateToProps)(Places)