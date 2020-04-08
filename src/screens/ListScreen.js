import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: 'Bob', age: 20 },
    { name: 'John', age: 26 },
    { name: 'Nancy', age: 4 },
    { name: 'Freds', age: 26 },
    { name: 'Adam', age: 76 },
    { name: 'Nick', age: 66 },
    { name: 'Charlie', age: 43 },
    { name: 'Matt', age: 63 },
    { name: 'Steve', age: 12 }
  ]
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={
        ({ item }) => {
          return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}
    />)
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    fontSize: 20
  }
});

export default ListScreen