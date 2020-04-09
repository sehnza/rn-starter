import React, { useState } from "react";
import { Button } from "react-native";
import styled from 'styled-components'

const CounterScreen = () => {
 const [counter, setCounter] = useState(0)


    return <>
    <Button 
      title="Increase" onPress={() => {
      setCounter(counter + 1)
    }} />
    <Button 
      title="Decrease" onPress={() => {
      setCounter(counter - 1)
    }} />

    <Button 
      title="Clear Counter" onPress={() => {
      setCounter(setCounter = 0)
    }} />
    <Title>Current Count: {counter}</Title>
    </>
}

const Title = styled.Text`
  font-size: ${props => props.large ? 45 : 20}px;
`

export default CounterScreen