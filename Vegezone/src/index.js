import React from 'react';

import SignIn from './scenes/SignIn';
import CreateAccount from './scenes/CreateAccount';
import Welcome from './scenes/Welcome';
import MainNavigation from './navigations/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';

const Index = () => {
  return (
    <NavigationContainer>
      <MainNavigation></MainNavigation>
    </NavigationContainer>
    
  );
};

export default Index;
