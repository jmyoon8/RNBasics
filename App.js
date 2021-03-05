import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './Components/GoalItem';
import InputText from './Components/InputText';

export default function App() {

  const [goalInput,setGoalInput]=useState([])
  const [visible,setVisible]=useState("false")

  const deleteElement=(key)=>{
    console.log(`${key} delete`)
    goalInput.splice(key,1)
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
        <StatusBar style="dark"/>  
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    padding:50
   },
  
});
