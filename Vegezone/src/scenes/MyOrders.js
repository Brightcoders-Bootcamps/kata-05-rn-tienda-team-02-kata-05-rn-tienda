import React,{useState} from 'react';

import {View, Text, ImageBackground, TouchableOpacity,FlatList} from 'react-native';
import styles from '../styles/MyOrdersStyles/MyOrdersStyles';
import HomeTopButton from '../components/atoms/Home/HomeTopButton';
import buttonMenu from '../assets/images/burguerButton.png';
import buttonCart from '../assets/images/shoppingCart.png';

import OrderItem from '../components/atoms/MyOrders/OrderItem';

import AsyncStorage from '@react-native-async-storage/async-storage';


const MyOrders = ()=>{    

    const [DATA,setDATA] = useState(null);
    
    AsyncStorage.getItem('miOrdersStorage')
    .then((res)=>{    
        var miDataCarrito = JSON.parse(res); 
        setDATA(miDataCarrito);        
    })          
  

    const renderItem = ({ item }) => {                
        return (
          <OrderItem            
            imageProduct={item.image}  
            nameProduct={item.name}
            priceProduct={item.price}                                 
          />          
        );
      }                            

    return(
        <View style={styles.mainContainer}>
            <ImageBackground source={require('../assets/images/backgroundVegezone.jpeg')} style={styles.size}></ImageBackground>                       

            <View style={styles.topSection}>
                <HomeTopButton imagePath={buttonMenu}></HomeTopButton>                
                <Text View style={styles.textTop}>My Orders</Text>
                <HomeTopButton imagePath={buttonCart}></HomeTopButton>                
            </View>

             <View style={styles.topSection}>                              
                <Text style={styles.textTotal}>Sub Total = $125</Text>                
                <TouchableOpacity style={styles.buttonCheck}>
                    <Text style={styles.textButton}>Check Out Now</Text>
                </TouchableOpacity>
            </View>        

            <View style={styles.mainContent}>
            <FlatList                                                                                                                          
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}                                                                                    
                />        
            </View>
        </View>        
    );
}
export default MyOrders;
