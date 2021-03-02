import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import Home from '../../scenes/Home';
import HomeStackNavigation from '../StackNavigation/HomeStackNavigation';
// import DetailsStackNavigation from './StackNavigation/DetailsStackNavigation';
import Icon from 'react-native-vector-icons/Feather';

import HomeStackTab from './HomeTabNavigation'
import MyOrders from '../../scenes/MyOrders'
import ConfirmationOrder from '../../scenes/OrderNumber';
import OrderStackTab from '../HomeTab/OrderTab'


const Tab = createMaterialBottomTabNavigator();
function MainTab() {
  return (
    <Tab.Navigator
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: 'white' }}
    drawerContent={props => <CustomDrawerContent {...props}/>}>
      <Tab.Screen name="Home" component={HomeStackTab}
      options={{
        tabBarLabel:'',
        tabBarIcon:() =>{
          const image = require('../../assets/images/front-store.png')
          return(
            <Image source={image} style={{height:28, width: 30}}></Image>  
          )   
      }
      }}
      />      
      <Tab.Screen name="Details" component={HomeStackTab} 
            options={{
              tabBarLabel:'',
              tabBarIcon:() =>{
                  const image = require('../../assets/images/icon-recipes.png')
                  return(
                    <Image source={image} style={{height:25, width: 35}}></Image>  
                  )   
              }
            }}/>        
      <Tab.Screen name="Button" component={HomeStackTab} 
            options={{
              tabBarLabel:'',
              tabBarIcon:() =>{
                const image = require('../../assets/images/button.jpeg')
                return(
                  <Image source={image} style={{height:45, width: 45, marginTop:-10}}></Image>  
                )   
            }
            }}/>  
            <Tab.Screen name="MyOrders" component={OrderStackTab} 
            options={{
              tabBarLabel:'',
              tabBarIcon:() =>{
                const image = require('../../assets/images/icon-cart.png')
                return(
                  <Image source={image} style={{height:30, width: 30}}></Image>  
                )   
            }
            }}/>  
            <Tab.Screen name="ConfirmationOrder" component={ConfirmationOrder} 
            options={{
              tabBarLabel:'',
              tabBarIcon:() =>(
                  <Icon name={'bell'} size={26}  color={'#748A9C'}></Icon>           
              )
            }}/>  
    </Tab.Navigator>
  );
}



export default MainTab;
