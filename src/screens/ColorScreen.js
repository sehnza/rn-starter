import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components'

const ColorScreen = () => {
    return <>
    <Button title='Add a Color' />
    <View style={{ height: 100, width:100, backgroundColor: 'rgb(0, 255, 0)'}} />
    </>
}


//styled components
const Title = 
styled.Text `font-size: ${props => props.large ? 45 : 20}px;`

export default ColorScreen