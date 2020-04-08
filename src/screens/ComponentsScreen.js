import React from 'react'
import styled from 'styled-components'

const ComponentsScreen = () => {
  const name = 'Hayden'

  return <>
    <Title large>Getting started with React Native!</Title>
    <Title>My name is {name}</Title>
  </>

}

const Title = styled.Text`
  font-size: ${props => props.large ? 45 : 20}px;
`

export default ComponentsScreen