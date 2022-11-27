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
        <Drawer.Navigator screenOptions={{
          headerShown: true,
        }}
          initialRouteName="dashboard"
        >
          <Drawer.Screen name="dashboard" component={Screen} />
          <Drawer.Screen name="Search Drama" component={Screen} />
          <Drawer.Screen name="Search Result"  component={Screen} />
        </Drawer.Navigator>
    );
  }
export default AppStarting;