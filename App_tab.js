import React from 'react';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NaviList from './Components/Navigation/NaviList'
import TodoList1 from './Components/TodoList_1/ToDoList_tab'
import TodoList2 from './Components/TodoList_2/TodoList'
import basics from './Components/basics/basics'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {

  // 바텀 탭 네비게이터
  const Tab=createBottomTabNavigator()


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
                  {props=><NaviList {...props}  extradata={dd}/>}
            </Tab.Screen>
            
            <Tab.Screen name="basics" component={basics}  initialParams={{id:"나는나야"}}/>
                                                                        {/* 뱃지를 통해 알림같은것을 표현할 수있따. */}
            <Tab.Screen name="TodoList1" component={TodoList1} options={{tabBarBadge:3}} />
            <Tab.Screen name="TodoList2" component={TodoList2}/>
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
