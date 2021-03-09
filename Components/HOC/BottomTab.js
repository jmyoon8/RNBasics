import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NavList from'../Navigation/NaviList'

const bottomTab = (Component) => {
    return (
        <View>
            <Component/>
           <NavList/>
        </View>
    )
}

export default bottomTab

const styles = StyleSheet.create({})
