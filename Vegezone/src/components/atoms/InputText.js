import React from 'react';
import {TextInput,View,Image} from 'react-native'
import styles from './../../styles/inputTextStyles'

const InputText = ({placeholder,imagePath,secureEntryValue})=>
{
    return(   
        <View style={styles.mainContainer}>
            <Image style={styles.imageStyles} source={imagePath}></Image>
            <TextInput secureTextEntry={secureEntryValue} style={styles.inputStyles} placeholder={placeholder}></TextInput>                                                             
        </View>                     
    );
}

export default InputText;