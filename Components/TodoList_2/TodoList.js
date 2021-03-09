import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import _ from'underscore'



export default function TodoList_2(props) {
 
  
  const [content,setContent]=useState("")
  const [list, setList]=useState([])
  const addItem=()=>{
    let item={
      id:new Date().getTime().toString(),
      content: content
    }
    list.push(item)
    
    setList([...list])
    
  }
  const deleteItem=(id)=>{
    // setList(_.reject(list,(item)=>item.id===id))
    
    setList(list.filter(list=>list.id!==id))
    
  }

  return (
    <View style={styles.container}>
      
        <TextInput onChangeText={(e)=>setContent(e)} value={content} placeholder="dddd"/>
        <Button onPress={()=>addItem()} title="추가"/>
        {list.map((value,index)=>

          <Text key={value.id} onPress={()=>deleteItem(value.id)}>{value.content}</Text>
          
        )}
        <Button title="고백" onPress={()=>props.navigation.goBack()}/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
   },
  
});
