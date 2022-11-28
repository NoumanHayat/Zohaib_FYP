/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    ImageBackground,
    Text,
    View,
} from 'react-native';
import { images, SIZES } from '../../../constants';
import home from './home';
import addProposal from './addProposal';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
function AppStarting() {
    return (
        <Drawer.Navigator screenOptions={{
          headerShown: true,
        }}
          initialRouteName="Home"
        >
          <Drawer.Screen name="Home" component={home} />
          <Drawer.Screen name="addProposal" component={addProposal} />
        </Drawer.Navigator>
    );
  }
export default AppStarting;