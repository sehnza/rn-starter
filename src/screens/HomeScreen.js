import React from "react";
import { Text, StyleSheet, View, Button, Touch } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  console.log(navigation)
  return <>
    <Text style={styles.text}>Hi There!</Text>

    <Button title="Go to Components Demo"
      onPress={() => navigation.navigate('Components')} />

    <Button title="Go to List Demo"
      onPress={() => navigation.navigate('List')} />

    <Button title="Go to Image Screen"
      onPress={() => navigation.navigate('Img')} />

    <Button title="Go to Counter Screen"
      onPress={() => navigation.navigate('Counter')} />

    <Button title="Go to Colors Screen"
      onPress={() => navigation.navigate('Colors')} /> 


    <TouchableOpacity onPress={() => navigation.navigate('List')}>
      < Text style={styles.text} > Go to list demo</Text>
    </TouchableOpacity >
  </>
}


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
