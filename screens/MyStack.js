import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Places from './Places'
import PlaceInfo from './PlaceInfo'

// redux
import {connect} from 'react-redux'

function mapStateToProps(state)  {
    return {
        language: state.language
    }
}

const Stack = createStackNavigator();




class App extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="Places"
                    component={Places}
                    options={{title:this.props.language==="esp"?"Lugares":"Places"}}
                    />
                <Stack.Screen 
                    name="PlaceInfo"
                    component={PlaceInfo} 
                    options={{title:this.props.language==="esp"?"Informacion del lugar":"Place Information"}}
                    />
            </Stack.Navigator>
        )
    }
}

export default connect(mapStateToProps)(App)