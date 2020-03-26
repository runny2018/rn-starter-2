import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ColorSquareScreen_Reducer from './src/screens/ColorSquareScreen_Reducer'
import CounterScreen_Reducer from './src/screens/CounterScreen_Reducer';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    ColorSquare_Reducer: ColorSquareScreen_Reducer,
    CounterScreen: CounterScreen_Reducer,
    TextScreen:TextScreen,
    Box:BoxScreen
    
  },
  {
    initialRouteName: "Box",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
