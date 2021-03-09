import React, { useState } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'

const InputText = (props) => {
     
  const [enteredGoal,setEnteredGoal]=useState("")
  let setGoalInput=props.setGoalInput

  const goalHandler=(text)=>{
    setEnteredGoal(text)
  }
  const addGoaltext=()=>{
    console.log(enteredGoal)
    //이렇게 해도된다.
    // setGoalInput([...goalInput,enteredGoal])
    //익명함수를 통해 표현이 가능하다.
    setGoalInput(goal=>[...goal, enteredGoal])
  }

  
    return (
      <Modal visible={props.visible} animationType="fade" >
        <View style={styles.textInputer}>
          <TextInput onChangeText={goalHandler} value={enteredGoal} style={styles.textInput} placeholder="Course Goal!!"/>
          <View style={{flexDirection:'row',marginTop:15}}>
            <View style={{marginRight:10}}>
              <Button  onPress={addGoaltext} style={styles.button} title="ADD"/>
            </View>
            <Button  onPress={()=>props.setVisible(false)} style={styles.button} title="close"/>
          </View>
        </View>
      </Modal>
    )
}

export default InputText

const styles = StyleSheet.create({
    textInputer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:300
    }
})
