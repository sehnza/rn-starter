import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

return<>
    <Text>{color}</Text>
    <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
    <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
</>
}

const styles = StyleSheet.create({})

export default ColorCounter