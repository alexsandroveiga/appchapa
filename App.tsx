import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import {
  Ubuntu_400Regular,
  Ubuntu_700Bold,
  Ubuntu_300Light,
  useFonts,
} from '@expo-google-fonts/ubuntu';
import AppProvider from './src/hooks';
import Routes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
