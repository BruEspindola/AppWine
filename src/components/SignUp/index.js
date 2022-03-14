import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function SignUp() {
    const navigation = useNavigation();
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={80}>
            <ScrollView style={{ width: "100%" }}>
                <Text style={styles.account}>Create an account</Text>

                <View style={styles.inputs}>
                    <TextInput
                        mode='outlined'
                        outlineColor={'#E0D8FB'}
                        label={'Nome'}
                        value={Name}
                        onChange={(Name) => setName(Name)}
                        style={[styles.input, { marginBottom: 10 }]}
                    />
                    <TextInput
                        mode='outlined'
                        outlineColor={'#E0D8FB'}
                        label={'E-mail'}
                        value={Email}
                        onChange={(Email) => setEmail(Email)}
                        style={[styles.input, { marginBottom: 10 }]}
                    />
                    <TextInput
                        mode='outlined'
                        outlineColor={'#E0D8FB'}
                        label={'Telefone'}
                        value={Phone}
                        onChange={(Phone) => setPhone(Phone)}
                        style={[styles.input, { marginBottom: 10 }]}
                    />
                    <TextInput
                        mode='outlined'
                        outlineColor={'#E0D8FB'}
                        label={'Senha'}
                        value={Password}
                        onChange={(Password) => setPassword(Password)}
                        style={[styles.input, { marginBottom: 10 }]}
                    />
                </View>
                <Button
                    style={styles.login}
                    mode="contained"
                    onPress={() => navigation.navigate('Catalogo')}
                    labelStyle={{ color: "#BBA9F5", fontWeight: "bold" }}>Entrar</Button>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.doLogin}>Voltar</Text>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BBA9F5',
        paddingBottom: 10
    },
    input: {
        height: 55,
        width: 317,
        borderRadius: 10,
        backgroundColor: '#E0D8FB',
    },
    account: {
        position: 'absolute',
        fontSize: 35,
        width: 160,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 22,
        marginTop: 16,
    },
    inputs: {
        marginTop: 136,
        marginHorizontal: 4,
        alignItems: 'center'
    },
    login: {
        width: 317,
        marginHorizontal: 16,
        height: 43,
        paddingVertical: 3,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 35
    },
    doLogin: {
        marginTop: 20,
        textDecorationLine: 'underline',
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 20,
        letterSpacing: 0.5,
        width: 140, 
        marginHorizontal: 160
    },
    register: {
        backgroundColor: '#836BCF',
        width: 230,
        alignSelf: 'center',
        marginTop: 60
    }
})
export { SignUp }