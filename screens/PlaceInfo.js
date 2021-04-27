import React from 'react'

import {View, Text} from 'react-native'

export default class PlaceInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigation } = this.props;
        console.log(this.props)
        console.log('-------')
        const  obj  = this.props.route.params.person
        console.log(typeof(obj))
        return (
            <View>
                <Text>Places info text</Text>
                <Text>{this.props.route.params.person.name}</Text>
                <Text>{this.props.route.params.person.lastname}</Text>
            </View>
        )
    }
}