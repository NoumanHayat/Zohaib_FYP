/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { } from 'react';

import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity

} from 'react-native';
import { images, SIZES } from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FAB, Card } from 'react-native-elements';
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
            <View style={{ flex: 1, alignItems: 'center'}}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '50%' }}>
                        <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.push("entrepreneur"); }}>
                                <View style={{ alignItems: 'center', padding: 20,paddingBottom:0 }}>
                                    <Card.Image
                                        style={{ width: 80, height: 70 }}
                                        resizeMode="cover"
                                        source={require('../../assets/images/enter.jpg')}
                                    />
                                </View>
                                <Card.Title>Entrepreneur</Card.Title>
                            </TouchableOpacity>
                        </Card>
                    </View>
                    <View style={{ width: '50%' }}>
                        <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.push("investor"); }}>
                                <View style={{ alignItems: 'center', padding: 20,paddingBottom:0 }}>
                                    <Card.Image
                                        style={{ width: 70, height: 70 }}
                                        resizeMode="cover"
                                        source={require('../../assets/images/invesment.jpg')}
                                    />
                                </View>
                                <Card.Title>investor</Card.Title>
                            </TouchableOpacity>
                        </Card>
                    </View>
                </View>

            </View>
            <FAB onPress={() => { alert("Ok"); }} icon={<MaterialIcons name="settings" size={24} color="white" />} placement={"right"} />
        </ImageBackground >
    );
};

export default Screen;