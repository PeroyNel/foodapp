import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import categoriesData from './assets/data/categoriesData';
import popularData from './assets/data/popularData';

import Home from './components/Home';
import Details from './components/Details';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

export default function App() {
  return <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Details"
            component={Details}
            options={{ headerShown: false }}
            />
            
            
          </Stack.Navigator>
            
          
         </NavigationContainer>;
}