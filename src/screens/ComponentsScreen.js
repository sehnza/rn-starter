import React from 'react'
// imports one or more small parts from the react native library
import { Text, View, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
  const name = 'Hayden'

  return <View>
    <Text style={styles.textStyle}>Getting started with React Native!</Text>
    <Text style={styles.textStyle2}>My name is {name}</Text>
  </View>

}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  textStyle2: {
    fontSize: 20
  }
})

export default ComponentsScreen