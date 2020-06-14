import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../pages/Dashboard';
import TruckStop from '../pages/TruckStop';

import Menu from '../components/Menu';

const App = createDrawerNavigator();

const screenWidth = Math.round(Dimensions.get('window').width);

const AppRoutes: React.FC = () => (
  <App.Navigator
    statusBarAnimation="fade"
    hideStatusBar
    initialRouteName="Dashboard"
    drawerStyle={{
      width: screenWidth,
    }}
    drawerContent={(props) => <Menu {...props} />}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Parada" component={TruckStop} />
  </App.Navigator>
);

export default AppRoutes;
