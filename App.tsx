/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import BootNavigator from './src/routers/BootNavigator';
import { store } from './src/app/store';
import { AuthProvider } from './src/contexts/AppContext';


const App: React.FC = () => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Provider store={store}>
          <BootNavigator />
        </Provider>
      </AuthProvider>
      <Toast />
    </SafeAreaProvider>
  );
};

export default App;
