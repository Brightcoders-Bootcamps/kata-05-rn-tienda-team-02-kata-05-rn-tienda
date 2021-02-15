import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../scenes/Welcome';
import SignIn from '../scenes/SignIn';
import CreateAccount from '../scenes/CreateAccount';
import Home from '../scenes/Home';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
         <Stack.Navigator initialRouteName="Welcome"  screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="Home" component={Home} />
         </Stack.Navigator>       
    )
}

export default MainNavigation;
