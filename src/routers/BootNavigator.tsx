import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {
  DefaultTheme,
  NavigationContainer,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import Theme from '../constants/Theme';
import { LoadingMiddleWare } from './LoadingMiddleWare';

import { useAppSelector } from '../app/hooks';
import { globalSelectors } from '../services/global';
import Loading from '../components/Loading/Loading';
import AuthNavigator from './AuthNavigator';

export type RootStackParamList = {
  Loading: undefined;
  Auth: undefined;
  App: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const theme: NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Theme.colors.backGround,
  },
};

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};



const BootNavigator: React.FC = () => {
  const loading = useAppSelector(globalSelectors.loading);
  return (
    <>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Loading" component={LoadingMiddleWare} />
         <Stack.Screen name="Auth" component={AuthNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
      {loading && <Loading />}
      </>
  );
};

export default BootNavigator;