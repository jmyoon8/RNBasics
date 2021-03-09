import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import NaviList from './Components/Navigation/NaviList'
import TodoList1 from './Components/TodoList_1/ToDoList'
import TodoList2 from './Components/TodoList_2/TodoList'
import basics from './Components/basics/basics'
import BottomTab from './Components/HOC/BottomTab'

export default function App() {
  // 스택 네비게이터
  const Stack=createStackNavigator()


  const dd="프랍으로 전달한 데이터"
  return (

    <>
    {/* 네비게이션 컨테이너이다. */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"#f4511e"}}}>
          {/* 소환할 컴포넌트에 prop을 보낼 경우 다음과 같이 사용한다. */}
          {/* 옵션도 같이 보낼수있따. */}
            <Stack.Screen name="home" options={{headerTitle:'맨닥',headerTitleAlign:'center'}}>
                  {props=>  <NaviList {...props}  extradata={dd}/>}
            </Stack.Screen>
            <Stack.Screen name="basics" component={BottomTab(basics)} initialParams={{id:"나는나야"}}/>
            <Stack.Screen name="TodoList1" component={TodoList1}/>
            <Stack.Screen name="TodoList2" component={TodoList2}/>
        </Stack.Navigator>
       
      </NavigationContainer>
     </>   

    
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop:getStatusBarHeight(),
    flex:1,
    justifyContent:'center',
    backgroundColor:'#fff',
    alignItems:'center',
    
   },
  
});
