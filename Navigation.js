import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginCadastro from './Pages/LoginCadastro'; 
import Welcome from './Pages/Welcome';
import Perfil from './Pages/Perfil';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#63cfbe',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LoginCadastro" component={LoginCadastro} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
