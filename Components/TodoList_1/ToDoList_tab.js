import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './GoalItem';
import InputText from './InputText';

export default function ToDoList(props) {

  const [goalInput,setGoalInput]=useState([])
  const [visible,setVisible]=useState("false")

  const deleteElement=(index)=>{
    console.log(`${index} delete`)
    goalInput.splice(index,1)
    setGoalInput([...goalInput])
  }
  const openModal=()=>{
    setVisible(true)
  }
  return (
    <View style={styles.container}>
      <Button title="openModal" onPress={openModal}/>
      <InputText setGoalInput={setGoalInput} setVisible={setVisible} visible={visible}/>
      <FlatList data={goalInput} renderItem={(value)=> 
        <GoalItem key={value.index} index={value.index} text={value.item} deleteElement={deleteElement}/>
      }/>
        
        <Button title="고백" onPress={()=>props.navigation.goBack()}/>

        
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    padding:50
   },
  
});
