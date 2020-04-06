import React from 'react'
// imports one or more small parts from the react native library
import { Text, Stylesheet } from 'react-native'

const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>This is the components screen</Text>
}

const styles = Stylesheet.create({
  textStyle: {
    fontSize: 30
  }
})

export default ComponentsScreen