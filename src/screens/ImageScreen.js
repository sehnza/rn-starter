import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from '../components/ImageDetail'
import score from '../components/ImageDetail'

const ImageScreen = () => {
  return <>
    <ImageDetail title="Forest" Image Score='' imageSource={require('../../assets/forest.jpg')}
      score={9}
    />
    <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')}
      score={5}
    />

    <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')}
      score={10}
    />

  </>
}

const styles = StyleSheet.create({});

export default ImageScreen