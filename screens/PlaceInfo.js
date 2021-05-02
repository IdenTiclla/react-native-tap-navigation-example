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
        const  {title, description}  = this.props.route.params.place
        //console.log(typeof(obj))
        return (
            <View>
                
                <Text>{title}</Text>
                <Text>-</Text>
                <Text>{description}</Text>
            </View>
        )
    }
}