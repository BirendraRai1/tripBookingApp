import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DestinationDetail, OnBoarding } from './screens'
import { COLORS, icons, SIZES } from './constants';
import { TouchableOpacity, Image } from 'react-native';

import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={'OnBoarding'}
    >
      <Stack.Screen
        name='OnBoarding '
        component={OnBoarding}
        options={{
          title: null,
          headerStyle: {
            backgroundColor: COLORS.white,
            borderBottomWidth: 0,
            shadowOpacity: 0
          },
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: SIZES.padding }}
              onPress={() => console.log('Pressed on OnBoarding Screen')}
            >
              <Image
                source={icons.barMenu}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25
                }}
              />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name='DestinationDetail'
        component={DestinationDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Home'
        component={Tabs}
        options={{
          title: null,
          headerStyle: {
            backgroundColor: COLORS.white,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            elevation: 0
          },
          headerLeft: ({ onPress }) => (
            <TouchableOpacity
              style={{ marginLeft: SIZES.padding }}
              onPress={onPress}
            >
              <Image
                source={icons.back}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: SIZES.padding }}
              onPress={() => console.log('Menu')}
            >
              <Image
                source={icons.menu}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25
                }}
              />
            </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
export default App;
