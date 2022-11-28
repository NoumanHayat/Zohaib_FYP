/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Modal
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, images, SIZES, GRADIENTS } from '../../../constants';
import ModalLayout from './ModalLayout';
import DatePicker from 'react-native-date-picker';


const Screen = ({ navigation }) => {
    // let currentUser = auth().currentUser;
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [time, setTime] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [inputVisible, setInputVisible] = React.useState(false);
    const [inputTimeVisible, setTimeInputVisible] = React.useState(false);
    console.log(String(time).substring(15, 21))
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
                            <Text style={{ fontSize: 30, color: 'black' }}>Add Proposal</Text>
                        </View>
                        <View >
                            <Text style={{ fontSize: 22, marginLeft: 10, color: 'black' }}>Title</Text>
                            <View style={styles.textBoxSign}>
                                <TextInput
                                    placeholder="Please Enter Title"
                                    onChangeText={value => setName(value)}
                                    placeholderTextColor="black"
                                    autoCapitalize={'none'}
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
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                            <Text style={{ fontSize: 23, marginLeft: 10, color: 'black' }}>Picture</Text>

                            <View style={styles.picBoxSign}>
                                <TouchableOpacity onPress={() => { alert("working"); }}>
                                    <Text>Choose File</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View >
                            <Text style={{ fontSize: 22, marginLeft: 10, color: 'black' }}>Valid Until </Text>
                            <View style={styles.textBoxSign}>
                                {/* <TouchableOpacity onPress={()=>alert("ok")}> */}
                                <TouchableOpacity onPress={() => {
                                    setInputVisible(true);
                                }}>
                                    <View style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                        color: 'black',
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ color: 'black' }} >{String(date).substring(0, 15)}</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* </TouchableOpacity> */}
                            </View>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={inputVisible}
                            onRequestClose={() => {
                                setInputVisible(!inputVisible);
                            }}
                        >
                            <ModalLayout
                                onClose={() => {
                                    setInputVisible(!inputVisible);
                                }}
                            >
                                <View style={{ alignItems: 'center' }}>
                                    <DatePicker textColor={'black'} mode={'date'} date={date} onDateChange={setDate} />
                                </View>
                            </ModalLayout>
                        </Modal>
                        <View >
                            <Text style={{ fontSize: 22, marginLeft: 10, color: 'black' }}>Summary</Text>
                            <View style={styles.textAreaSign}>
                                <TextInput
                                    placeholder="Please Enter Title"
                                    onChangeText={value => setName(value)}
                                    placeholderTextColor="black"
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
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>


                            <Text style={{ fontSize: 23, marginLeft: 10, color: 'black' }}>Upload File</Text>

                            <View style={styles.picBoxSign}>
                                <TouchableOpacity onPress={() => { alert("working"); }}>
                                    <Text>Choose File</Text>
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
                                        alert('Working..');
                                    }}
                                >
                                    <Text style={{ color: '#ffffff', fontSize: 20 }}>Post</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </ImageBackground >
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
        marginLeft:"40%"
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
