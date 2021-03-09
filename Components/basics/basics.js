import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import _ from'underscore'



export default function basics(props) {
 
  
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
 
  
  const [platform,setPlatform]=useState("")
    
    useEffect(() => {
    if(Platform.OS==='android'){
      console.log("안드로이드!")
      setPlatform('안드로이드')
    }else if(Platform.OS==='ios'){
      console.log("아이오에스!")
      setPlatform('아이오에스!')
    }
    }, [])


  return (
    <View style={styles.container}>
        <Text>높이에 맞지롤~{platform}</Text>
        <Text>
          {numbers.join(',')}
          {'파람받은거'+props.route.params.id}
        </Text>
        <Text>
            <Button onPress={()=>setToggle(!toggle)} title="조또번호"/>
        </Text>

        <Text>
          {up}
        </Text>
        <Button onPress={()=>setUp(up+1)} title="증가"/>
        <Button title="고백" onPress={()=>props.navigation.goBack()}/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    
    // marginTop:getStatusBarHeight(),
    flex:1,
    
    alignItems:'center',
    
   },
  
});
