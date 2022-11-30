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
import { images, SIZES } from '../../constants';
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './account/SignUp';
import SignIn from './account/SignIn';
import dashboard from './dashboard';
// import addProposal from './dashboard/addProposal';
import proposalDetails from './dashboard/proposalDetails';
import chat from './dashboard/chat';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const Screen = ({ navigation }) => {
  return (
    <ImageBackground
      source={images.background} resizeMode="cover"
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
      }}>
      <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 35, color: 'black', fontWeight: "bold" }}>Please Select User Type?</Text>
      </View>
    </ImageBackground >
  );
};
const Drawer = createDrawerNavigator();
function AppStarting() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="dashboard" component={dashboard} />
      {/* <Stack.Screen name="addProposal" component={addProposal} /> */}
      <Stack.Screen name="proposalDetails" component={proposalDetails} />
      <Stack.Screen name="Chat" component={chat} />
    </Stack.Navigator>
  );
}
export default AppStarting;