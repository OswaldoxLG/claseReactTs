import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { UseEffectScreen } from '../screens/useEffectScreen';
import { BottomTabNavigator } from './BottomTabNavigator';

export type RootTabTopParam = {
  BottomTabNavigator: undefined;
  UseEffectScreen: undefined;
}

export const TopTabNavigator = () => {
  const Tab = createMaterialTopTabNavigator<RootTabTopParam>();
  return(
    <Tab.Navigator
      initialRouteName='BottomTabNavigator'
      tabBarPosition='top'
      screenOptions={({route}) => ({
        tabBarShowIcon: true,
        tabBarPressColor: 'violet',
        tabBarPressOpacity: 1,
        tabBarActiveTintColor: 'violet',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 8,
          fontWeight: 'bold'
        },
        tabBarItemStyle:{
          borderTopWidth: 3,
          borderTopColor: 'white',
        },
        tabBarStyle:{
          backgroundColor: "white",
          height: 50,
        },
        tabBarIndicatorStyle:{
          backgroundColor: "violet",
          height: 4, 
          vorderRadius: 10,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch( route.name) {
            case 'BottomTabNavigator':
              iconName = 'home';
              break;
            case 'UseEffectScreen':
              iconName = 'cogs';
              break;
          }
          return <FontAwesome name={iconName} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name='BottomTabNavigator'
        component={ BottomTabNavigator }
      />
      <Tab.Screen
        name='UseEffectScreen'
        component={ UseEffectScreen }
      />
    </Tab.Navigator>
  );
}