import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const GoalItem = (props) => {

    return (
        <TouchableOpacity key={props.index} onPress={()=>props.deleteElement(props.index)}>
        <View  style={styles.item}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    item:{
        backgroundColor:'gray',
        marginTop:10,
        paddingVertical:10,
        paddingHorizontal:7,
        borderRadius:7
      },
      goalText:{
        color:'white'
      }
})
