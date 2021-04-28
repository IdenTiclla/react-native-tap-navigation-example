
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {connect} from 'react-redux'

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
  });

function mapStateToProps(state)  {
    return {
        language: state.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeLanguageToEnglish: () => dispatch({type: 'CHANGE_ENGLISH'}),
        changeLanguageToSpanish: () => dispatch({type: 'CHANGE_SPANISH'}),

    }
}

class Settings extends React.Component {
    
    render() {
        if (this.props.language === 'en') {
            return (
                <View style={styles.container}>
                    <Text>Settings Screen</Text>
                    

                    <TouchableOpacity onPress={()=> this.props.changeLanguageToEnglish()}>
                            <Text>change language</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.changeLanguageToSpanish()}>
                            <Text>cambiar idioma</Text>
                    </TouchableOpacity>
                   
                </View>
            )    
        }

        else if (this.props.language === 'esp') {
            return (
                <View style={styles.container}>
                    <Text>Pantalla de configuraciones</Text>

                    <TouchableOpacity onPress={()=> this.props.changeLanguageToEnglish()}>
                            <Text>change language</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.changeLanguageToSpanish()}>
                            <Text>cambiar idioma</Text>
                    </TouchableOpacity>
                    
                </View>
            )    
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)