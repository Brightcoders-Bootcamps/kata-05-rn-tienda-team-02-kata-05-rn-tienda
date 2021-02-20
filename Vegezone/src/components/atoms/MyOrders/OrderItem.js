import React from 'react';
import {Text,Image,View} from 'react-native';

import styles from '../../../styles/MyOrdersStyles/OrderItemStyles';

const OrderItem = ({imageProduct,nameProduct,priceProduct})=>{
    return(
        <View style={styles.itemContainer}>

            <View style={styles.imageContainer}>
                <Image source={{uri:imageProduct}} style={styles.imageStyles}></Image>
            </View>   

            <View style={styles.detailsContainer}>
                <Text style={styles.itemName}>{nameProduct}</Text>
                <Text style={styles.itemPrice}>{"$"+priceProduct}</Text>
            </View>            
        </View>
    );
}

export default OrderItem;