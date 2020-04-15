import React, { useReducer } from "react";
import { Button } from "react-native";
import styled from 'styled-components'


 // const [counter, setCounter] = useState(0)

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0})

 const reducer = (state, action) => {
  // state === { count: number}
  // action === { type: 'increment' || 'decrement'}
    switch (action.type) {

      case 'increment':
        return {...state, count: state.count + action.payload}

      case 'decrement':
        return {...state, count: state.count + action.payload}

      default: 
        return state
    }
 }

    return <>
    <Button 
      title="Increase" 
      onPress={() => {
      dispatch({ type: 'increment', payload: 1})
    }}
    />

    <Button 
      title="Decrease" 
      onPress={() => {
      dispatch({ type: 'decrement', payload: -1})
    }}
    />


    <Title>Current Count: {state.count}</Title>
    </>
}

const Title = styled.Text`
  font-size: ${props => props.large ? 45 : 20}px;
`

export default CounterScreen


