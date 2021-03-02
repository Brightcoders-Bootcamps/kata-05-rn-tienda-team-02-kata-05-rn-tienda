import React from 'react'
import { View, Text, TouchableOpacity, Image, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../../scenes/Welcome';
import SignIn from '../../scenes/SignIn';
import CreateAccount from '../../scenes/CreateAccount';
import Home from '../../scenes/Home';
import ProductDetails from '../../scenes/ProductDetails';
import Icon from 'react-native-vector-icons/Feather';
import IconMat from 'react-native-vector-icons/MaterialIcons'
import MyOrders from '../../scenes/MyOrders';
import ConfirmationOrder from '../../scenes/OrderNumber';

const Stack = createStackNavigator();

const OrderStackTab = ({navigation}) => {
    return (
         <Stack.Navigator>          
             <Stack.Screen name="MyOrders" component={MyOrders}  options={{ headerShown: false}}/>
            <Stack.Screen name="ConfirmationOrder" component={ConfirmationOrder} options={{ headerShown: false}}/>
         </Stack.Navigator>       
    )
}

export default OrderStackTab;
