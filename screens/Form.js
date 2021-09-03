import React, { useState, useRef } from 'react'
import { StyleSheet, Text, ScrollView, View, Modal, Button, TextInput, TouchableOpacity } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Form = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <View>
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={showModal}
                onRequestClose={() => {
                    console.log('Modal has been closed.');
                }}>
                {/*All views of Modal*/}
                {/*Animation can be slide, slide, none*/}


                <View style={styles.signupbuttonView}>
                    <AwesomeButton
                        backgroundColor="#475472"
                        backgroundActive="#424e6a"
                        backgroundShadow="#000"
                        backgroundDarker="#2a3143"
                        borderRadius={7}
                        width={80}
                        height={40}
                        raiseLevel={3}
                        onPress={() => {
                            setShowModal(!showModal);
                        }}
                        style={styles.sbutton}
                    >
                        <Icon
                            name="close"
                            style={styles.iText}
                        />
                        <Text style={styles.fText}>Close</Text>
                    </AwesomeButton>
                </View>
                <Text style={styles.sHeader}>Create a Account</Text>

            </Modal>
            <KeyboardAwareScrollView

            >
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        maxLength={20}
                        placeholder="First Name" />
                    <TextInput
                        style={styles.input}
                        maxLength={20}
                        placeholder="Middle Name"
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={20}
                        placeholder="Last Name"
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={40}
                        placeholder="Email Address"
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={10}
                        placeholder="Phone Number"
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={60}
                        placeholder="Address"
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={3}
                        placeholder="Age"
                    />
                </View>
            </KeyboardAwareScrollView>
            {/*Button will change state to true and view will re-render*/}

            <TouchableOpacity
                onPress={() => {
                    setShowModal(!showModal);
                }}
                style={styles.ButtonStyle}
            >
                <Text
                    style={styles.textStyle}
                >
                    Verify The Form
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    signupbuttonView: {
        alignItems: 'flex-end',
        margin: 10
    },
    sHeader: {
        fontSize: 30,
        textAlign: 'center',
    },
    sbutton: {
        justifyContent: 'center'
    },
    iText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 4,
        color: '#d4d9e4'
    },
    fText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#d4d9e4'
    },
    currency: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    inputView: {
        margin: 10,
        paddingHorizontal: 30
    },
    input: {
        borderBottomColor: '#434445',
        borderBottomWidth: 1.6,
        marginBottom: 10
    },
    ButtonStyle: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 20,
        marginRight: 20
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 10
    }
})
