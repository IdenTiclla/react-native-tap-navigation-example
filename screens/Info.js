
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//redux
import {connect} from 'react-redux'

//location
import * as Location from 'expo-location'

// geolib
import {getPreciseDistance} from 'geolib'


import en from '../src/en.json'
import es from '../src/es.json'
import de from '../src/de.json'

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

function mapStateToProps(state)  {
    return {
        language: state.language
    }
}



class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstPlaceSpanish:{},
            firstPlaceEnglish:{},
            firstPlaceGerman:{},
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
            firstPlaceSpanish: es.sort(function(a,b){return getPreciseDistance({latitude:latitude, longitude:longitude},{latitude:a.latitude, longitude:a.longitude}) - getPreciseDistance({latitude:latitude, longitude:longitude},{latitude:b.latitude, longitude:b.longitude})})[0],
            firstPlaceEnglish: en.sort(function(a,b){return getPreciseDistance({latitude:latitude, longitude:longitude},{latitude:a.latitude, longitude:a.longitude}) - getPreciseDistance({latitude:latitude, longitude:longitude},{latitude:b.latitude, longitude:b.longitude})})[0],
            firstPlaceGerman: de.sort(function(a,b){return getPreciseDistance({latitude:latitude, longitude:longitude},{latitude:a.latitude, longitude:a.longitude}) - getPreciseDistance({latitude:latitude, longitude:longitude},{latitude:b.latitude, longitude:b.longitude})})[0]
            
        })
    }

    componentDidMount() {
        this._getLocation()
        setInterval(()=> this._getLocation(), 10000)
    }

    render() {
        if (!this.state.location) {
            return (
                <View></View>
            )
        }
        else{
            if (this.props.language === 'esp') {
                // si la distancia es menor a 500 renderizamos informacion del lugar
                if (getPreciseDistance({ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude },
                            { latitude: this.state.firstPlaceSpanish.latitude, longitude: this.state.firstPlaceSpanish.longitude }) < 500) {
                    return (
                        <View style={styles.container}>
                            <Text>{this.state.firstPlaceSpanish.title}</Text>
                            <Text>{this.state.firstPlaceSpanish.description}</Text>
                        
                        </View>
                    )
                }
                else {
                    // caso contrario mostramos la distancia hacia el punto mas cercano
                    return (
                        <View style={styles.container}>
                            <Text>Proximo lugar: {this.state.firstPlaceSpanish.title}</Text>
                            <Text>Distancia:{getPreciseDistance({ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude },
                                { latitude: this.state.firstPlaceSpanish.latitude, longitude: this.state.firstPlaceSpanish.longitude })}</Text>
                        </View>
                    )
                }
                
            }
            else if (this.props.language === 'en') {
                // si la distancia es menor a 500 renderizamos informacion del lugar
                if (getPreciseDistance({ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude },
                    { latitude: this.state.firstPlaceSpanish.latitude, longitude: this.state.firstPlaceSpanish.longitude }) < 500) {
                    return (
                        <View style={styles.container}>
                            <Text>{this.state.firstPlaceEnglish.title}</Text>
                            <Text>{this.state.firstPlaceEnglish.description}</Text>
                        
                        </View>
                    )
                }
                else {
                    // caso contrario mostramos la distancia hacia el punto mas cercano
                    return (
                        <View style={styles.container}>
                            <Text>Next place: {this.state.firstPlaceEnglish.title}</Text>
                            <Text>Distance:{getPreciseDistance({ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude },
                                { latitude: this.state.firstPlaceEnglish.latitude, longitude: this.state.firstPlaceEnglish.longitude })}</Text>
                        </View>
                    )
                }
            }
            else if (this.props.language === 'de') {
                // si la distancia es menor a 500 renderizamos informacion del lugar
                if (getPreciseDistance({ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude },
                    { latitude: this.state.firstPlaceSpanish.latitude, longitude: this.state.firstPlaceSpanish.longitude }) < 500) {
                    return (
                        <View style={styles.container}>
                            <Text>{this.state.firstPlaceGerman.title}</Text>
                            <Text>{this.state.firstPlaceGerman.description}</Text>
                        
                        </View>
                    )
                }
                else {
                    // caso contrario mostramos la distancia hacia el punto mas cercano
                    return (
                        <View style={styles.container}>
                            <Text>Nächster Platz: {this.state.firstPlaceGerman.title}</Text>
                            <Text>Entfernung:{getPreciseDistance({ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude },
                                { latitude: this.state.firstPlaceGerman.latitude, longitude: this.state.firstPlaceGerman.longitude })}</Text>
                        </View>
                    )
                }
            }
        }
        
        
        
    }
}

export default connect(mapStateToProps)(Info)