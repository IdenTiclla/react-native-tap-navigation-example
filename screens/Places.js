import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PlaceCard from '../components/PlaceCard'

//redux
import {connect} from 'react-redux'

// import languages

import en from '../src/en.json'
import es from '../src/es.json'

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
            placesEnglish: []
        }
    }
    componentDidMount() {
        this.setState({
            placesSpanish: es,
        })

        this.setState({
            placesEnglish: en,
        })

    }
    // <PlaceCard onPressCard={()=> this.props.navigation.navigate('PlaceInfo',{person:{name:'iden', lastname:'ticlla'}})}></PlaceCard>
    render() {
        console.log('places renderizado')
        if (this.props.language === "esp") {
            
            return (
                <ScrollView style={styles.places}>
                    {this.state.placesSpanish.map(place => (
                        <PlaceCard sitio={place}></PlaceCard>
                    ))}
                </ScrollView>
            )
        } else if (this.props.language==="en") {
            return (
                <ScrollView style={styles.places}>
                    {this.state.placesEnglish.map(place => (
                        <PlaceCard sitio={place}></PlaceCard>
                    ))}
                </ScrollView>
            )
        }
            
        
        return (
            <ScrollView style={styles.places}>
                <PlaceCard onPressCard={()=> this.props.navigation.navigate('PlaceInfo',{person:{name:'iden', lastname:'ticlla'}})}></PlaceCard>
                <PlaceCard></PlaceCard>
                <PlaceCard></PlaceCard>
                <PlaceCard></PlaceCard>
            </ScrollView>
        )
    }
}
export default connect(mapStateToProps)(Places)