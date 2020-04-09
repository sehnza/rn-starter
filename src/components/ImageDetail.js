import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ imageSource, title, score }) => {
  return <>
    <Image source={imageSource} />
    <Text>{title}</Text>
    <Text>Image Score - {score}</Text>
  </>
}

const styles = StyleSheet.create({});

export default ImageDetail