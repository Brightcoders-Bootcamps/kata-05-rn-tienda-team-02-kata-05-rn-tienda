import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from '../styles/SignCreateStyles/SignInSignUpStyles';
import InputText from '../components/atoms/InputText';
import ButtonSignCreate from '../components/atoms/ButtonSignCreate';

import {signInCreateConstants} from '../utils/Constants/SignCreateConstants'



import emailIcon from '../assets/images/email.png'
import passwordIcon from '../assets/images/password.png'

const SignIn = ()=>
{
    return(
        <View style={styles.mainContainer}>

            <View style={styles.mainContent}>
                <Text style={styles.signinText}>{signInCreateConstants.signinText}</Text>   
                <InputText placeholder={signInCreateConstants.emailText} imagePath={emailIcon}></InputText>  
                <InputText secureEntryValue={true} placeholder={signInCreateConstants.passwordText} imagePath={passwordIcon}></InputText> 
                <Text style={styles.forgotText}>{signInCreateConstants.forgotPassword}</Text>  
                <ButtonSignCreate ButtonText={signInCreateConstants.signinText}></ButtonSignCreate> 
            </View>
            
            <TouchableOpacity>
                <Text style={styles.textOption}>{signInCreateConstants.createAccountText}</Text>                                               
            </TouchableOpacity>            
        </View>        
    );
}

export default SignIn;