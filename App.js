import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer, useNavigationBuilder} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Mainpage from './components/MainPage'
import DataPage from './components/DataPage'


const Stack=createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'
      screenOptions={{
        headerTitleAlign: 'center', 
        headerStyle: {
          backgroundColor: '#621FF7',
        },
        headerTintColor: '#fff',
        headerTitleStyle :{
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen name="Main" component={Mainpage} options={{title: 'Main Header'}}/>
        <Stack.Screen name="Data"  component={DataPage} options={{title: 'Data Header'}}/>
      </Stack.Navigator>
    </NavigationContainer>

    );
}
