import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../scenes/Welcome';
import SignIn from '../scenes/SignIn';
import CreateAccount from '../scenes/CreateAccount';
import Home from '../scenes/Home';
import HomeNavigation from '../navigations/HomeNavigation';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
         <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />            
            <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
         </Stack.Navigator>       
    )
}

export default MainNavigation;
