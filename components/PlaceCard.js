import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'; //yarn add react-native-paper


import { View, Alert } from 'react-native'

// geolib
import {getPreciseDistance} from 'geolib'

export default class PlaceCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Card onPress={this.props.onPressCard}>
                    <Card.Content>
                        <Title>{this.props.place.title}</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: this.props.place.image }} />
                    <Card.Actions>
                        
                        <Button 
                            onPress={()=>console.log('hiciste click en el ok')}>
                                Distancia: {getPreciseDistance({ latitude: this.props.latitude, longitude: this.props.longitude },
                                { latitude: this.props.place.latitude, longitude: this.props.place.longitude })} 
                                M
                            </Button>
                    </Card.Actions>
                </Card>
            </View>
        )
    }
}