
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';

//redux
import {connect} from 'react-redux'

//location
import * as Location from 'expo-location'

// geolib
import {getPreciseDistance} from 'geolib'

// video component
import MyVideoComponent from '../components/MyVideoComponent'

import en from '../src/en.json'
import es from '../src/es.json'
import de from '../src/de.json'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    },
    info: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:80
    },
    
  })

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
        //console.log('get location executed')
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permissions not granted'
            })
            return;
        }
        let location = await Location.getCurrentPositionAsync({accuracy:6})
        //console.log(location.coords.latitude + " , " + location.coords.longitude)
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
        setInterval(()=> this._getLocation(), 5000)
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
                        <ScrollView>
                            <View style={styles.info}>
                                <Text style={{fontSize:35}}>{this.state.firstPlaceSpanish.title}</Text>
                                <Text style={{fontSize:20}}>{this.state.firstPlaceSpanish.description}</Text>
                                <MyVideoComponent uri={this.state.firstPlaceSpanish.video}/>
                            </View>
                        </ScrollView>
                    )
                }
                else {
                    // caso contrario mostramos la distancia hacia el punto mas cercano
                    return (
                        <View style={styles.container}>
                            <ImageBackground source={{uri: 'https://i.pinimg.com/originals/11/b4/8f/11b48f26b2fcfcf77cbd8017a6dd5215.jpg'}} style={styles.image}>
                                <Text style={styles.text}>Proximo lugar: {this.state.firstPlaceSpanish.title}</Text>
                                <Text style={styles.text}>Distancia:{getPreciseDistance({ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude },
                                    { latitude: this.state.firstPlaceSpanish.latitude, longitude: this.state.firstPlaceSpanish.longitude })} - Metros</Text> 
                            </ImageBackground>
                        </View>
                    )
                }
                
            }
            else if (this.props.language === 'en') {
                // si la distancia es menor a 500 renderizamos informacion del lugar
                if (getPreciseDistance({ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude },
                    { latitude: this.state.firstPlaceSpanish.latitude, longitude: this.state.firstPlaceSpanish.longitude }) < 500) {
                    return (
                        <ScrollView>
                            <View style={styles.info}>
                                <Text style={{fontSize:35}}>{this.state.firstPlaceEnglish.title}</Text>
                                <Text style={{fontSize:20}}>{this.state.firstPlaceEnglish.description}</Text>
                                <MyVideoComponent uri={this.state.firstPlaceEnglish.video}/>
                            </View>
                        </ScrollView>
                    )
                }
                else {
                    // caso contrario mostramos la distancia hacia el punto mas cercano
                    return (
                        <View style={styles.container}>
                            <ImageBackground source={{uri: 'https://i.pinimg.com/originals/11/b4/8f/11b48f26b2fcfcf77cbd8017a6dd5215.jpg'}} style={styles.image}>
                                <Text style={styles.text}>Next place: {this.state.firstPlaceEnglish.title}</Text>
                                <Text style={styles.text}>Distance:{getPreciseDistance({ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude },
                                { latitude: this.state.firstPlaceEnglish.latitude, longitude: this.state.firstPlaceEnglish.longitude })} - Meters</Text>    
                            </ImageBackground>
                            
                        </View>
                    )
                }
            }
            else if (this.props.language === 'de') {
                // si la distancia es menor a 500 renderizamos informacion del lugar
                if (getPreciseDistance({ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude },
                    { latitude: this.state.firstPlaceSpanish.latitude, longitude: this.state.firstPlaceSpanish.longitude }) < 500) {
                    return (
                        <ScrollView>
                            <View style={styles.info}>
                                <Text style={{fontSize:35}}>{this.state.firstPlaceGerman.title}</Text>
                                <Text style={{fontSize:20}}>{this.state.firstPlaceGerman.description}</Text>
                                <MyVideoComponent uri={this.state.firstPlaceGerman.video}/>
                            </View>
                        </ScrollView>
                    )
                }
                else {
                    // caso contrario mostramos la distancia hacia el punto mas cercano
                    return (
                        <View style={styles.container}>
                            <ImageBackground source={{uri: 'https://i.pinimg.com/originals/11/b4/8f/11b48f26b2fcfcf77cbd8017a6dd5215.jpg'}} style={styles.image}>
                                <Text style={styles.text}>Nächster Platz: {this.state.firstPlaceGerman.title}</Text>
                                <Text style={styles.text}>Entfernung:{getPreciseDistance({ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude },
                                { latitude: this.state.firstPlaceGerman.latitude, longitude: this.state.firstPlaceGerman.longitude })} - Meter</Text>
                            </ImageBackground>
                        </View>
                    )
                }
            }
        }
        
        
        
    }
}

export default connect(mapStateToProps)(Info)