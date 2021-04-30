import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'; //yarn add react-native-paper


import { View, Alert } from 'react-native'



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
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        
                        <Button 
                            onPress={()=>console.log('hiciste click en el ok')}>
                                Distancia{this.props.getPreciseDistance({ latitude: -17.78686, longitude: -63.1960 },
                                { latitude: this.props.place.latitude, longitude: this.props.place.longitude })}
                                Metros
                            </Button>
                    </Card.Actions>
                </Card>
            </View>
        )
    }
}