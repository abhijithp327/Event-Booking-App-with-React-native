import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AccountScreen from '../screens/AccountScreen';
import AffiliateScreen from '../screens/AffiliateScreen';
import HomeScreen from '../screens/HomeScreen';

// Get device dimensions
const { width } = Dimensions.get('window');

// Calculate responsive icon size
const iconSize = width > 360 ? 32 : 28; // Larger icon size for wider screens

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HomeStack') {
            iconName = 'home';
          } else if (route.name === 'Affiliate') {
            iconName = 'diamond';
          } else if (route.name === 'Account') {
            iconName = 'account-circle';
          }
          return <Icon name={iconName} color={color} size={iconSize} />;
        },
        tabBarActiveTintColor: '#FF4757', // Color for active tab
        tabBarInactiveTintColor: 'gray', // Color for inactive tabs
        tabBarStyle: {
          backgroundColor: '#FFFFFF', // Background color for tab bar
          display: 'flex', // Ensure the tab bar is visible
          height: width > 360 ? 80 : 60, // Adjust tab bar height
        },
        tabBarItemStyle: {
          paddingVertical: 5, // Adjust vertical padding to ensure items are well spaced
        },
        tabBarLabelStyle: {
          fontSize: width > 360 ? 14 : 12, // Adjust label font size based on screen width
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={iconSize} />
          ),
          tabBarLabel: 'Events',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Affiliate"
        component={AffiliateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="diamond" color={color} size={iconSize} />
          ),
          tabBarLabel: 'Affiliate',
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle" color={color} size={iconSize} />
          ),
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
