import React from 'react';
import { StyleSheet, Text, View } from 'react-native';




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

export default class CartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Cart screen xd</Text>
            </View>
        )
    }
}