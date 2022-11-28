/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View, Modal, FlatList,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, images, SIZES, GRADIENTS } from '../../../constants';
import { Avatar, Title } from 'react-native-paper';
import ModalLayout from './ModalLayout';
import { FAB, Card } from 'react-native-elements';
// import auth from '@react-native-firebase/auth';

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types

const CustomCard = ({navigation}) => {
    const [visible, setVisible] = useState(false);
    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.push('proposalDetails');
            }}>
                <View style={{
                    backgroundColor: '#F7F7FE', borderRadius: 10, marginBottom: 15,
                    padding: 5, shadowColor: 'black',
                    shadowOffset: {
                        width: 10,
                        height: 10,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 1,
                    elevation: 10,
                }}>
                    <View>
                        <Image style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 1,
                        }} source={{ uri: 'https://clashofclans.com/uploaded-images-blog/_1440xAUTO_crop_center-center_90/Clash-at-Home_thumbnail_builder_906x506.jpg' }} />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 23, color: 'black' }}>Here is title!</Text>
                            <Text>We will remove extra Barracks and Dark Barracks buildings and
                                only keep one of each. The highest level building will be kept,
                                and in case all the highest level buildings are under construction
                                you will keep the one with the shortest upgrade time left.</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};
const Profile = ({ navigation }) => {
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
                        <View style={{ margin: 15, marginTop: 10 }}>
                            <View style={{ margin: 5, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                                <Text style={{ fontSize: 30, color: 'black' }}>Business Projects Proposal</Text>
                            </View>
                            

                            <View style={styles.OrganizedEvent}>
                                <View style={{ marginTop: 10 }}>
                                    <CustomCard navigation={navigation}/>
                                    <CustomCard navigation={navigation}/>
                                    <CustomCard navigation={navigation}/>
                                    <CustomCard navigation={navigation}/>
                                    <CustomCard navigation={navigation}/>
                                    <CustomCard navigation={navigation}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </ImageBackground >
    );
};

export default Profile;
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
    textAbove: { fontSize: 14, marginLeft: 12 },
    modalContainer: {
        margin: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12,

    },
    modalView: {
        width: '100%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        // alignItems: "center",
        // shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    EventDetails: {

    },
    card: {
        backgroundColor: '#E9E8F3',
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
    },
    OrganizedEvent: {
        margin: 10,
    },
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
    // =============================================================
    userInfoSection: {
    },

    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
});
