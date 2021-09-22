import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens';

import { icons, COLORS } from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                display: 'flex',
                position: 'absolute',
                height: 90,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 10
                },
                shadowOpacity: 0.53,
                shadowRadius: 13.97,
                elevation: 21
            }
        }}
    >
        <Tab.Screen
            name='Home'
            component={Home}
            options={{
                tabBarIcon: (({ focused }) => (
                    <Image
                        source={icons.home}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? COLORS.primary : COLORS.gray
                        }}
                    />
                ))
            }}
        />
        <Tab.Screen
            name='Search'
            component={Home}
            options={{
                tabBarIcon: (({ focused }) => (
                    <Image
                        source={icons.search}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? COLORS.primary : COLORS.gray
                        }}
                    />
                ))
            }}
        />
        <Tab.Screen
            name='BookMark'
            component={Home}
            options={{
                tabBarIcon: (({ focused }) => (
                    <Image
                        source={icons.bookmark}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? COLORS.primary : COLORS.gray
                        }}
                    />
                ))
            }}
        />
        <Tab.Screen
            name='Account'
            component={Home}
            options={{
                tabBarIcon: (({ focused }) => (
                    <Image
                        source={icons.user}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? COLORS.primary : COLORS.gray
                        }}
                    />
                ))
            }}
        />
    </Tab.Navigator>
)

export default Tabs;