import React from 'react'
// imports one or more small parts from the react native library
import { Text, Stylesheet } from 'react-native'

const ComponentsScreen = () => {
  return <text style={styles.textStyle}>This is the components screen</text>
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

export default ComponentsScreen