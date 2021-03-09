import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Value } from 'react-native-reanimated'


const NaviList = (props) => {
    return (
        <View style={styles.navigation}>
            <View style={styles.navigationButtons}> 
            <Text>
                {props.extradata}
            </Text>
                <Button title="todo_1" onPress={()=>props.navigation.navigate('TodoList1')} />
                <Button title="todo_2" onPress={()=>props.navigation.navigate('TodoList2')} />
                <Button title="basics" onPress={()=>props.navigation.navigate('basics')} />
            </View>
        </View>
    )
}

export default NaviList

const styles = StyleSheet.create({
    navigation:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    navigationButtons:{
        flexDirection:'row'
    }

})
