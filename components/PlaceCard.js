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
                        <Title>{this.props.sitio.title}</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button onPress={()=>console.log('hiciste click en el objeto cancel')}>Cancel</Button>
                        <Button onPress={()=>console.log('hiciste click en el ok')}>Ok</Button>
                    </Card.Actions>
                </Card>
            </View>
        )
    }
}