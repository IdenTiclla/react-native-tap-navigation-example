import React from 'react'

import {View, Text, ScrollView} from 'react-native'

// Image
import { Image } from 'react-native-elements'

// expo-speech
import * as Speech from 'expo-speech'

//redux
import {connect} from 'react-redux'



function mapStateToProps(state)  {
    return {
        language: state.language
    }
}
class PlaceInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    speak = (txt) => {
        const thingToSay = txt
        Speech.speak(thingToSay, {
            language:this.props.language==="esp" ? 'es-ES': this.props.language==="en" ? 'en-US': 'de-DE'
        })
    }

    render() {
        const { navigation } = this.props;
        console.log(this.props)
        console.log('-------')
        const  {title, description, image}  = this.props.route.params.place
        //console.log(typeof(obj))
        return (
            <ScrollView>
                
                <Text>{title}</Text>
                <Text>-</Text>
                <Text>{description}</Text>

                <Image
                        source={{ uri: "https://i.ytimg.com/vi/OZdIbJZdSZw/maxresdefault.jpg" }}
                        style={{ width: 100, height: 100 }}
                        onPress={()=>this.speak(description)}
                        />

                <Image
                        source={{ uri: image }}
                        style={{ width: 390, height: 350 }}
                        />
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(PlaceInfo)