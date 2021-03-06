import React from 'react';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import NaviList from './Components/Navigation/NaviList'
import TodoList1 from './Components/TodoList_1/ToDoList_tab'
import TodoList2 from './Components/TodoList_2/TodoList'
import basics from './Components/basics/basics'
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab=createBottomTabNavigator()
const Stack=createStackNavigator()


//tabNavigation에서 stacknavigation을 쓰는방법

//1 . 각탭에서 쓰일 stack을 따로 구분짓고
function HomeStack(){
  return(
    <Stack.Navigator>
        <Stack.Screen name="home" component={NaviList}/>
        <Stack.Screen name="basics" component={basics}/>
    </Stack.Navigator>
  )
}

function ToDoStack(){
  return(
    <Stack.Navigator>
        <Stack.Screen name="TodoList1" component={TodoList1}/>
        <Stack.Screen name="TodoList2" component={TodoList2}/>
    </Stack.Navigator>
  )
}
//각각의 stack을 tabRoute에 넣는다.
export default function App() {

  // 바텀 탭 네비게이터


  const dd="프랍으로 전달한 데이터"
  return (

    <>
    {/* 네비게이션 컨테이너이다. */}
      <NavigationContainer>
        {/* tab의 아이콘 지정 */}
        <Tab.Navigator screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
              let iconName;

              if(route.name==="home"){
                iconName=focused?'ios-information-circle':'ios-information-circle-outline';
              }else if(route.name==="basics"){
                iconName=focused?'ios-list-box':'ios-list'
              }else if(route.name==="TodoList1"){
                iconName=focused?'ios-information-circle':'ios-information-circle-outline';
              }else if(route.name==='TodoList2'){
                iconName=focused?'ios-information-circle':'ios-information-circle-outline';
              }
              return <Ionicons name={iconName} size={size} color={color}/>
            }
            
        })} tabBarOptions={{activeTintColor:'tomato', inactiveTintColor:'gray'}}  >
          
            <Tab.Screen  name="home">
                  {props=><HomeStack {...props}  extradata={dd}/>}
            </Tab.Screen>
            <Tab.Screen name="TodoListStack" component={ToDoStack} options={{tabBarBadge:3}} />
            
        </Tab.Navigator>
       
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
