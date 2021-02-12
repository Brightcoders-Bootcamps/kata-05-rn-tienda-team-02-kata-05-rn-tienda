import React from 'react';
import {View, Text} from 'react-native';

import SignIn from './scenes/SignIn'
import CreateAccount from './scenes/CreateAccount'
import Welcome from './scenes/Welcome';
import WelcomeMain from '../src/components/atoms/Welcome/WelcomeMain'

const Index = () => {
  return (    
    //<SignIn></SignIn>          
    //<CreateAccount></CreateAccount>
    <WelcomeMain></WelcomeMain>;
  );
};

export default Index;
