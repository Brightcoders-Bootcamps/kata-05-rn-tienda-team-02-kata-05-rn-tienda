import React from 'react';
import {View,Text,FlatList} from 'react-native';

import HomeTopButton from '../components/atoms/HomeTopButton';
import ProductItem from '../components/atoms/ProductItem';

import styles from '../styles/HomeStyles/HomeStyles';

import buttonMenu from '../assets/images/burguerButton.png';
import buttonCart from '../assets/images/shopingCart.png';

import productsData from '../utils/Constants/productData';

const Home = () =>
{    
    const renderItem = ({ item }) => {                
        return (
          <ProductItem
            imageProduct={item.image}  
            nameProduct={item.name}
            priceProduct={item.price}                                 
          />          
        );
      }
    
    return(
        <View style={styles.mainContainer}>

            <View style={styles.topOptionsContainer}>
                <HomeTopButton imagePath={buttonMenu}></HomeTopButton>                
                <Text style={styles.homeText}>Home</Text>
                <HomeTopButton imagePath={buttonCart}></HomeTopButton> 
            </View>

            <View style={styles.productListContainer}>
                <FlatList                
                    key={'#'}                                                    
                    horizontal={false}                    
                    data={productsData}
                    renderItem={renderItem}
                    keyExtractor={(item) => "#" + item.id}  
                    numColumns={3}                                                                       
                />
            </View>

        </View>
    );
}

export default Home;
