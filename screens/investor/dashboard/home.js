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

const CustomCard = ({ navigation }) => {
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
                            <Text style={{color: 'black'}}>We will remove extra Barracks and Dark Barracks buildings and
                                only keep one of each. The highest level building will be kept,
                                and in case all the highest level buildings are under construction
                                you will keep the one with the shortest upgrade time left.</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            setVisible(true);
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 30 }}>
                                <Image style={{
                                    width: 65,
                                    height: 65,
                                    borderRadius: 360,
                                }} source={{ uri: 'https://www.bdc.ca/globalassets/digizuite/34593-what-it-takes-to-be-entrepreneur-sm.jpg' }} />
                                <Text style={{ fontSize: 26, color: 'black', marginLeft: 10 }}>Dr Einstein </Text>
                                <Text style={{alignSelf:'flex-end'}}>Online 3 min ago</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </TouchableOpacity>
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
                            {/* <Text>Online 3 min ago</Text> */}
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
                            <TouchableOpacity onPress={()=>{navigation.push('Chat')}}>
                                <View style={{ backgroundColor: 'blue', borderRadius: 20 }}>
                                    <Text style={{ fontSize: 23, color: 'white', alignSelf: 'center' }}>Message</Text>
                                </View>
                            </TouchableOpacity>
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
                                    <CustomCard navigation={navigation} />
                                    <CustomCard navigation={navigation} />
                                    <CustomCard navigation={navigation} />
                                    <CustomCard navigation={navigation} />
                                    <CustomCard navigation={navigation} />
                                    <CustomCard navigation={navigation} />
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
