import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import styled from 'styled-components'

const CounterScreen = () => {
    return <>
    <Title>Current Count:=</Title>
    </>
}

const Title = styled.Text`
  font-size: ${props => props.large ? 45 : 20}px;
`