import React from 'react';
import {TouchableOpacity,Text,Image} from 'react-native'
import styles from './../../styles/ButtonSignCreateStyles'

const ButtonSignCreate = ({ButtonText})=>
{
    return(                
        <TouchableOpacity style={styles.buttonStyles}>
            <Image style={styles.buttonImage} source={require('../../assets/images/arrowButton.png')}></Image>
            <Text style={styles.buttonText}>{ButtonText}</Text>
        </TouchableOpacity>        
    );
}

export default ButtonSignCreate;