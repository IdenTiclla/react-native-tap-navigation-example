
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// image
import { Image } from 'react-native-elements';
//redux
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
                    <Text style={{fontWeight:'bold', fontSize:30}}>Please choose a language</Text>

                    <Image
                        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" }}
                        style={{ width: 200, height: 150 }}
                        onPress={()=> this.props.changeLanguageToEnglish()}
                        />

                    

                    <Image
                        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png" }}
                        style={{ width: 200, height: 150, marginTop:60 }}
                        
                        onPress={()=> this.props.changeLanguageToSpanish()}
                        />
                   
                </View>
            )    
        }

        else if (this.props.language === 'esp') {
            return (
                <View style={styles.container}>
                    <Text style={{fontWeight:'bold', fontSize:30}}>Por favor elija un idioma</Text>

                    <Image
                        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" }}
                        style={{ width: 200, height: 150 }}
                        onPress={()=> this.props.changeLanguageToEnglish()}
                        />

                    

                    <Image
                        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png" }}
                        style={{ width: 200, height: 150, marginTop:60 }}
                        
                        onPress={()=> this.props.changeLanguageToSpanish()}
                        />
    


                    
                </View>
            )    
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)