import React from 'react';
import {TouchableOpacity,Text} from 'react-native'
import styles from './../../styles/ButtonSignCreateStyles'

const ButtonSignCreate = ({ButtonText})=>
{
    return(                
        <TouchableOpacity style={styles.buttonStyles}>
            <Text style={styles.buttonText}>{ButtonText}</Text>
        </TouchableOpacity>        
    );
}

export default ButtonSignCreate;