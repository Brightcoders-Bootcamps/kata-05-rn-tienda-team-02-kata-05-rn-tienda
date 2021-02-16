import * as React from 'react';
import { View, Text,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';

import styles from '../styles/DrawerMenuStyles/DrawerMenuStyles'
import Home from '../scenes/Home'

import homeIcon from '../assets/images/homeIcon.png'
import cartIcon from '../assets/images/shoppingCart.png'
import priceIcon from '../assets/images/priceTag.png'
import bellIcon from '../assets/images/bellIcon.png'
import phoneIcon from '../assets/images/phoneIcon.png'
import feedIcon from '../assets/images/feedIcon.png'
import logoutIcon from '../assets/images/logoutIcon.png'



function ItemMenu(props)
{
    return(
        <TouchableOpacity onPress={props.navigation} style={styles.itemMenuContainer}>
            <Image style={styles.itemImage} source={props.imageIcon}></Image>
            <Text style={styles.itemText}>{props.itemText}</Text>
        </TouchableOpacity>
    )
}

function CustomDrawerContent(props) {
  return (
      <View>
        <View style={styles.topMenu}>
            <Text style={styles.titleMenu}>Vegetablely</Text>
            <Image style={styles.imageMenu} source={require('../assets/images/shopIcon.png')} />
        </View>  

        <ItemMenu imageIcon={homeIcon} itemText="Home" navigation={()=> props.navigation.navigate('Home')}/> 
        <ItemMenu imageIcon={cartIcon} itemText="My Orders"/> 
        <ItemMenu imageIcon={priceIcon} itemText="My Orders"/> 
        <ItemMenu imageIcon={bellIcon} itemText="Notifications"/> 
        <ItemMenu imageIcon={bellIcon} itemText="Our Branches"/>
        <ItemMenu imageIcon={phoneIcon} itemText="Contact Us"/>
        <ItemMenu imageIcon={feedIcon} itemText="Feedback"/>
        <ItemMenu imageIcon={logoutIcon} itemText="Logout"/>
        
      </View>        
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerStyle={{
        backgroundColor: '#3cb3ab',
        width: 240,
      }}
    drawerContent={props => <CustomDrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={Home} />       
    </Drawer.Navigator>
  );
}

export default MyDrawer;
