import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PlaceCard from '../components/PlaceCard'


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

export default class Places extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView style={styles.places}>
                <PlaceCard onPressCard={()=> this.props.navigation.navigate('PlaceInfo')}></PlaceCard>
                <PlaceCard></PlaceCard>
                <PlaceCard></PlaceCard>
                <PlaceCard></PlaceCard>
            </ScrollView>
        )
    }
}