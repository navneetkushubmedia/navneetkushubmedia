import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import HomeScreen from '../screens/Home/HomeScreen';
import EventScreen from '../screens/Event/EventScreen';
import EditStackScreen from '../screens/EditStack/EditStackScreen';
import AccountStatementScreen from '../screens/AccountStatement/AccountStatementScreen';
export type SignInOtpParams = {
  type: string;
};

export type AuthStackParamList = {
  HomeScreen: undefined;
  EventScreen: undefined;
  EditSatckScreen:undefined;
  AccountStatementScreen:undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="EventScreen" component={EventScreen} />
      <Stack.Screen name="EditStackScreen" component={EditStackScreen} />
      <Stack.Screen name="AccountStatementScreen" component={AccountStatementScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
