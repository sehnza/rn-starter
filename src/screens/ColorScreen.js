import React, {useState} from 'react'
import { Button, View, FlatList } from 'react-native'
import styled from 'styled-components'

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors)

    return <>
    <Button title = 'Add a Color' onPress={() => {
        setColors([...colors, randomRgb()])
    }} />
    
    <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
            return <View style={{ height: 100, width: 500, backgroundColor: item }} />
    }} />
    </> 

} 

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`

}

//styled components
const Title = styled.Text`
  font-size: ${props => props.large ? 45 : 20}px;
`

export default ColorScreen