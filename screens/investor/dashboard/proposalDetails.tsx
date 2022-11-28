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

const CustomCard = (props) => {
    const [visible, setVisible] = useState(false);
    return (
        <View>
            {/* <TouchableOpacity onPress={() => {
                setVisible(true);
            }}> */}
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
                <TouchableOpacity onPress={() => {
                    setVisible(true);
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                        <Image style={{
                            width: 65,
                            height: 65,
                            borderRadius: 360,
                        }} source={{ uri: 'https://www.bdc.ca/globalassets/digizuite/34593-what-it-takes-to-be-entrepreneur-sm.jpg' }} />
                        <Text style={{ fontSize: 26, color: 'black', marginLeft: 10 }}>Dr Einstein </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 19, color: 'black' }}>Bid : 4500RS</Text>
                    <Text style={{ fontSize: 19, color: 'black' }}>Summary!</Text>
                    <Text>We will remove extra Barracks and Dark Barracks buildings and
                        only keep one of each. The highest level building will be kept,
                        and in case all the highest level buildings are under construction
                        you will keep the one with the shortest upgrade time left.</Text>
                </View>
            </View>
            {/* </TouchableOpacity> */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible);
                }}
            >
                <ModalLayout
                    onClose={() => {
                        setVisible(!visible);
                    }}
                >
                    <View >
                        <View style={{ alignItems: 'center' }}>
                            <Image style={{
                                width: 200,
                                height: 200,
                                borderRadius: 360,
                            }} source={{ uri: 'https://www.bdc.ca/globalassets/digizuite/34593-what-it-takes-to-be-entrepreneur-sm.jpg' }} />
                            <Text style={{ fontSize: 22, color: 'black' }}>Dr Albert Einstein</Text>
                            {/* <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 23, color: 'black' }}>Here we Go!</Text>
                                <Text>We will remove extra Barracks and Dark Barracks buildings and
                                    only keep one of each. The highest level building will be kept,
                                    and in case all the highest level buildings are under construction
                                    you will keep the one with the shortest upgrade time left....</Text>

                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                <LinearGradient
                                    colors={['#21D4FD', '#2152FF']}
                                    end={{ x: 0, y: 1 }}
                                    start={{ x: 1, y: 0 }}
                                    style={{ borderRadius: 30 }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            alignItems: "center",
                                            padding: 10,
                                            flexDirection: 'row'
                                        }}
                                        onPress={() => { alert('working') }}
                                    >
                                        <MaterialIcons name="account-tree" size={24} color="black" />
                                        <Text style={{ color: 'black' }}>Details</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                                <LinearGradient
                                    colors={['#FF0080', '#7928CA']}
                                    end={{ x: 0, y: 1 }}
                                    start={{ x: 1, y: 0 }}
                                    style={{ borderRadius: 30, marginLeft: '10%' }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            alignItems: "center",
                                            padding: 10,
                                            flexDirection: "row",
                                        }}
                                        onPress={() => {
                                            alert('working');
                                        }}
                                    >
                                        <MaterialIcons name="edit" size={24} color="black" />
                                        <Text style={{ color: 'black' }}>Edit</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                                <LinearGradient
                                    colors={['#FBCF33', '#F53939']}
                                    end={{ x: 0, y: 1 }}
                                    start={{ x: 1, y: 0 }}
                                    style={{ borderRadius: 30, marginLeft: '17%' }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            alignItems: "center",
                                            padding: 10,
                                            flexDirection: "row",
                                        }}
                                        onPress={() => {
                                            alert('ok');
                                        }}
                                    >
                                        <MaterialIcons name="delete" size={24} color="black" />
                                        <Text style={{ color: 'black' }}>Delete</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View> */}
                        </View>
                        <View>
                            <Text style={{ fontSize: 23, color: 'black' }}>Details</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="account-balance" size={24} color="black" />
                                <Text style={{ fontSize: 18, color: 'black' }}>Mata Transport Private Limited</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="add-call" size={24} color="black" />
                                <Text style={{ fontSize: 18, color: 'black' }}>+92300 0000000</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="email" size={24} color="black" />
                                <Text style={{ fontSize: 18, color: 'black' }}>myemail@gmail.com</Text>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <MaterialIcons name="details" size={24} color="black" />
                                <Text style={{ fontSize: 18, color: 'black' }}>Facebook, American online social network service
                                    that is part of the company Meta Platforms. Facebook was founded in 2004 by Mark Zuckerberg,
                                    Eduardo Saverin, Dustin Moskovitz, and Chris Hughes, all of whom were students at Harvard University.
                                    Facebook became the largest social network in the world.</Text>
                            </View>
                        </View>
                    </View>
                </ModalLayout>
            </Modal>
        </View>
    );
};
const Profile = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
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
                    <View style={{ margin: 20 }}>
                        <View>
                            <View>
                                <Image style={{
                                    width: '100%',
                                    height: 200,
                                    borderRadius: 1,
                                }} source={{ uri: 'https://clashofclans.com/uploaded-images-blog/_1440xAUTO_crop_center-center_90/Clash-at-Home_thumbnail_builder_906x506.jpg' }} />
                                <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 23, color: 'black' }}>Here is title!</Text>
                                </View>
                                <View>
                                    <Text style={{ color: 'black', fontSize: 17 }}>We will remove extra Barracks and Dark Barracks buildings and
                                        only keep one of each. The highest level building will be kept,
                                        and in case all the highest level buildings are under construction
                                        you will keep the one with the shortest upgrade time left.</Text>
                                    <Text style={{ color: 'black', fontSize: 17 }}>We will remove extra Barracks and Dark Barracks buildings and
                                        only keep one of each. The highest level building will be kept,
                                        and in case all the highest level buildings are under construction
                                        you will keep the one with the shortest upgrade time left.</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>


                                    <Text style={{ fontSize: 23, marginLeft: 10, color: 'black' }}>Document File</Text>

                                    <View style={{
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
                                        marginLeft: "35%"
                                    }}>
                                        <TouchableOpacity onPress={() => { alert("working"); }}>
                                            <Text style={{ color: 'black' }}>Download</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                    <LinearGradient
                                        colors={['#21D4FD', '#2152FF']}
                                        end={{ x: 0, y: 1 }}
                                        start={{ x: 1, y: 0 }}
                                        style={{ width: "80%", borderRadius: 30 }}
                                    >
                                        <TouchableOpacity
                                            style={{
                                                alignItems: "center",
                                                padding: 10,
                                            }}
                                            onPress={() => {
                                                setVisible(true);
                                            }}
                                        >
                                            <Text style={{ color: '#ffffff', fontSize: 20 }}>Bid</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={visible}
                        onRequestClose={() => {
                            setVisible(!visible);
                        }}
                    >
                        <ModalLayout
                            onClose={() => {
                                setVisible(!visible);
                            }}
                        >
                            <View >
                                <View >
                                    <Text style={{ fontSize: 22, marginLeft: 10, color: 'black' }}>Amount</Text>
                                    <View style={styles.textBoxSign}>
                                        <TextInput
                                            placeholder="Enter amount"
                                            // onChangeText={value => setName(value)}
                                            placeholderTextColor="gray"
                                            autoCapitalize={'none'}
                                            keyboardType='numeric'
                                            style={{
                                                flex: 1,
                                                height: 40.5,
                                                fontSize: 15,
                                                marginLeft: 2,
                                                color: 'black'
                                            }}
                                        />
                                    </View>
                                </View>
                                <View >
                                    <Text style={{ fontSize: 22, marginLeft: 10, color: 'black' }}>Proposal</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        height: 245,
                                        marginHorizontal: 5,
                                        marginTop: 5,
                                        paddingHorizontal: SIZES.radius,
                                        borderRadius: SIZES.radius,
                                        backgroundColor: COLORS.lightGray,
                                        elevation: 2,
                                    }}>
                                        <TextInput
                                            placeholder="Please Enter Proposal Details"
                                            // onChangeText={value => setName(value)}
                                            placeholderTextColor="gray"
                                            autoCapitalize={'none'}
                                            multiline={true}
                                            numberOfLines={4}
                                            style={{
                                                flex: 1,
                                                height: 240.5,
                                                fontSize: 15,
                                                marginLeft: 2,
                                                color: 'black',

                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                    <LinearGradient
                                        colors={['#21D4FD', '#2152FF']}
                                        end={{ x: 0, y: 1 }}
                                        start={{ x: 1, y: 0 }}
                                        style={{ width: "80%", borderRadius: 30 }}
                                    >
                                        <TouchableOpacity
                                            style={{
                                                alignItems: "center",
                                                padding: 10,
                                            }}
                                            onPress={() => {
                                                setVisible(true);
                                            }}
                                        >
                                            <Text style={{ color: '#ffffff', fontSize: 20 }}>Submit</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                            </View>
                        </ModalLayout>
                    </Modal>
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
