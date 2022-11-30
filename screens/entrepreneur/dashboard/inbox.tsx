/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Modal,
    TouchableNativeFeedback,
    FlatList
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, images, SIZES, GRADIENTS } from '../../../constants';
import ModalLayout from './ModalLayout';
import DatePicker from 'react-native-date-picker';

import AppText from '../../../components/AppText';
const CustomCard = ({navigation}) => {
    return (
        <View
            style={{
                margin: 24,
                padding: 10,
                shadowColor: '#00000060',
                backgroundColor: COLORS.white,
                shadowOffset: {
                    width: 0,
                    height: 0
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,
                elevation: 12,
                alignItems: 'center',
                marginBottom: 10,
                marginTop: 10,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <FastImage
                    source={{ uri: 'https://cdn.techjuice.pk/wp-content/uploads/2015/02/wallpaper-for-facebook-profile-photo.jpg' }}
                    style={{
                        width: 65,
                        height: 65,
                        borderRadius: 35,
                        backgroundColor: COLORS.gray,
                        marginRight: 10
                    }}
                />
                <View style={{ flex: 1 }}>
                    <AppText fontWeight="Medium" style={{ fontSize: 14 }}>
                        Tom Riddle
                    </AppText>
                </View>
                <View>
                    <NotificationButton
                        onPress={() => {
                            alert("User Blocked");

                        }}
                        text="Block" style={undefined} />
                    <NotificationButton
                        onPress={() => {
                            // console.log("Invited you for Challenge!");
                            navigation.push('Chat');
                        }}
                        text="Message"
                        type="secondary"
                        style={{ marginTop: 8 }}
                    />
                </View>
            </View>
        </View>
    )
}
const Screen = ({ navigation }) => {
    // let currentUser = auth().currentUser;
    return (
        <ImageBackground
            source={images.background}
            resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
                // justifyContent: 'center',
            }}>
            <SafeAreaView>
                <KeyboardAwareScrollView>
                    <View
                        style={{
                            flex: 1,
                        }}>
                        <View style={{ margin: 5, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                            <Text style={{ fontSize: 30, color: 'black' }}>Inbox</Text>
                        </View>
                        {/* <FlatList
                            data={DATA}
                            renderItem={CustomCard }
                            keyExtractor={item => item.id}
                        /> */}
                        <CustomCard navigation={navigation}/>
                        <CustomCard navigation={navigation}/>
                        <CustomCard navigation={navigation}/>
                        <CustomCard navigation={navigation}/>
                        <CustomCard navigation={navigation}/>
                        <CustomCard navigation={navigation}/>
                        <CustomCard navigation={navigation}/>
                        <CustomCard navigation={navigation}/>
                        <CustomCard navigation={navigation}/>
                        <CustomCard navigation={navigation}/>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </ImageBackground >
    );
};
const NotificationButton = ({ type = 'primary', onPress, text, style }) => {
    return (
        <View
            style={{
                borderRadius: 5,
                overflow: 'hidden',
                ...style
            }}
        >
            <TouchableNativeFeedback
                onPress={() => (onPress ? onPress() : null)}
                style={{ borderRadius: 5, overflow: 'hidden' }}
            >
                <View
                    style={{
                        paddingVertical: 8,
                        paddingHorizontal: 20,
                        backgroundColor: type === 'primary' ? COLORS.primary : COLORS.lightPrimary
                    }}
                >
                    <AppText
                        style={{
                            fontSize: 14,
                            color: type === 'primary' ? COLORS.white : COLORS.primary
                        }}
                    >
                        {text}
                    </AppText>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};
export default Screen;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000', // for iphone drop shadow (specifies the android equivalent, elevation: 1)
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    textBoxSign: {
        flexDirection: 'row',
        height: 45,
        marginHorizontal: 5,
        marginTop: 5,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        justifyContent: 'center', alignItems: 'center',
    },
    picBoxSign: {
        flexDirection: 'row',
        height: 35,
        marginHorizontal: 5,
        marginTop: 5,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray,
        // elevation: 2,
        // justifyContent: 'space-between', 
        alignItems: 'center',
        marginLeft: "40%"
    },
    textAreaSign: {
        flexDirection: 'row',
        height: 245,
        marginHorizontal: 5,
        marginTop: 5,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        // justifyContent: 'center', alignItems: 'center',
    },
    textAbove: { fontSize: 14, marginLeft: 12 },
});
