import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import _ from'underscore'



export default function App() {
 
  
  const [numbers,setNumbers]=useState([])
  const [toggle,setToggle]=useState(true)
  const [up,setUp]=useState(0)
  
  useEffect(() => {
      
    let result=[]
    _.times(45,n=>result.push(n+1))
    const number=_.shuffle(result);
    number.length=7
    setNumbers(number)
  
  }, [toggle])
 
  

  return (
    <View style={styles.container}>
        <Text>
          {numbers.join(',')}
        </Text>
        <Text>
            <Button onPress={()=>setToggle(!toggle)} title="조또번호"/>
        </Text>

        <Text>
          {up}
        </Text>
        <Button onPress={()=>setUp(up+1)} title="증가"/>
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
