import React from 'react'
import {View, ImageBackground, Text, Image} from 'react-native';
import stylesOrder from '../styles/OrderNumber/OrderConfirmationStyles';

const Confirmation = () => (
    <>
      <View style={stylesOrder.container}>
        <View style={stylesOrder.image}>
          <ImageBackground
            source={require('../assets/images/cover.jpg')}
            style={stylesOrder.size}></ImageBackground>
        </View>
        <View style={stylesOrder.order}>
          <View style={stylesOrder.circule}>
            <Image
              source={require('../assets/images/shop.png')}
              style={stylesOrder.shop}></Image>
          </View>
          <View style={stylesOrder.orderText}>
            <Text style={stylesOrder.text}>Order placed.</Text>
            <Text style={stylesOrder.text}>Your order number is</Text>
            <Text style={stylesOrder.textOrder}>#5412</Text>
          </View>
        </View>
      </View>
    </>
  );

  export default Confirmation;
