import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../scenes/Home'

const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
    return (      
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />                          
        </Drawer.Navigator>      
    );
  };
  
  export default DrawerNavigation;
  