import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from '../styles/SignInSignUpStyles';
import InputText from '../components/atoms/InputText';
import ButtonSignCreate from '../components/atoms/ButtonSignCreate';

import emailIcon from '../assets/images/email.png'
import passwordIcon from '../assets/images/password.png'

const SignIn = ()=>
{
    return(
        <View style={styles.mainContainer}>

            <View style={styles.mainContent}>
                <Text style={styles.signinText}>Sign In</Text>   
                <InputText placeholder={"Email"} imagePath={emailIcon}></InputText>  
                <InputText secureEntryValue={true} placeholder={"Password"} imagePath={passwordIcon}></InputText> 
                <Text style={styles.forgotText}>Forgot Password?</Text>  
                <ButtonSignCreate ButtonText={"SIGN IN"}></ButtonSignCreate> 
            </View>
            
            <TouchableOpacity>
                <Text style={styles.textOption}>CREATE ACCOUNT</Text>                                               
            </TouchableOpacity>            
        </View>        
    );
}

export default SignIn;