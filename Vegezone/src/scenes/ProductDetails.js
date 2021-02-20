import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';

import HomeTopButton from '../components/atoms/Home/HomeTopButton';

import buttonMenu from '../assets/images/burguerButton.png';
import buttonCart from '../assets/images/shoppingCart.png';

import plusIcon from '../assets/images/plusIcon.png';
import minusIcon from '../assets/images/minus.png';

import styles from '../styles/DetailsStyles/DetailsStyles';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetails = ({route,navigation})=>{
    const {image, name, price} = route.params;

    let newProduct = {
        image:image,
        name:name,
        price:price
    }
    
    return(
        <View style={styles.mainContainer}>
            <View style={styles.topSection}>
                <HomeTopButton  imagePath={buttonMenu}></HomeTopButton> 
                <Text style={styles.textTop}>Details</Text>
                <HomeTopButton imagePath={buttonCart}></HomeTopButton> 
            </View>

            <View style={styles.mainContentDetails}>
                <View style={styles.containerImage}>
                    <Image style={styles.imageStyles} source={{uri:image}}></Image>
                </View>                
                <Text style={styles.textProduct}>{name}</Text>
                <Text style={styles.textPrice}>${price}</Text>  
                <Text style={styles.textDescription}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Pellentesque egestas quam porta dui 
                    tincidunt, ac ultrices gravida. Sed id nisl arcu. Curabitur 
                    eget massa id tortor volutpat vestibulum.
                </Text>   

                <View style={styles.counterContainer}>
                    <TouchableOpacity>
                        <Image  source={plusIcon}></Image>                    
                    </TouchableOpacity>
                    <Text style={styles.counterText}>{10}kg</Text>
                    <TouchableOpacity>
                    <Image  source={minusIcon}></Image>                    
                    </TouchableOpacity>
                </View>
                
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={()=>{

                    //Obtenemos el valor del AsyncStorage y lo convertimos a manjable//
                    AsyncStorage.getItem('miOrdersStorage')
                    .then((res)=>{    
                        let arrayManejable = JSON.parse(res);                         
                        arrayManejable.push(newProduct);            
                        saveItemOnStorage(arrayManejable);
                    })    

                    //Funcion para guardar el nuevo valor en Storage//
                    function saveItemOnStorage(item){        
                        let newItem = JSON.stringify(item);
                        AsyncStorage.setItem('miOrdersStorage', newItem);        
                    }
                    
                    navigation.navigate('MyOrders')
                }}
                style={styles.buttonCart}>
                    <Text style={styles.textButton}>Add To Cart</Text>
                </TouchableOpacity>
            </View>   
            </View> 
        </View>
    )
}

export default ProductDetails;
