import React from 'react';
import {View, Text} from 'react-native';
import SignIn from './scenes/SignIn';
import Welcome from './scenes/Welcome';
import WelcomeMain from '../src/components/atoms/Welcome/WelcomeMain'

const Index = () => {
  return (    
    <WelcomeMain></WelcomeMain>;
    //<SignIn></SignIn>      
  );
};

export default Index;
