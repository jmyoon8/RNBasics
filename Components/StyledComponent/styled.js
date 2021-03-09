import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styledcomponent from 'styled-components/native'


const Row=styledcomponent.View`
    flex-direction : row;
`
const Hellow=styledcomponent.Text`
    font-size:12px
`

const styled = () => {
    return (
        <Row>
            <Hellow>dddd</Hellow>
        </Row>
    )
}

export default styled

const styles = StyleSheet.create({})
