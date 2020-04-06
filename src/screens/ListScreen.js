import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: 'Bob' },
    { name: 'John' },
    { name: 'Nancy' },
    { name: 'Fred' },
    { name: 'Adam' },
    { name: 'Nick' },
    { name: 'Charlie' },
    { name: 'Matt' },
    { name: 'Steve' }
  ]
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={
        ({ item }) => {
          return <Text>{item.name}</Text>
        }}
    />)
}

const styles = StyleSheet.create({});

export default ListScreen