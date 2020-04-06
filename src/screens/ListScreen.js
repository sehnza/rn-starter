import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: 'Bob' },
    { name: 'John' },
    { name: 'Nancy' },
    { name: 'Freds' },
    { name: 'Adam' },
    { name: 'Nick' },
    { name: 'Charlie' },
    { name: 'Matt' },
    { name: 'Steve' }
  ]
  return (
    <FlatList
      horizontal
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={
        ({ item }) => {
          return <Text style={styles.textStyle}>{item.name}</Text>
        }}
    />)
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 100,
    fontSize: 20
  }
});

export default ListScreen