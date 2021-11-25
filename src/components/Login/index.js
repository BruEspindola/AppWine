import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';


export default Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor="#BBA9F5"
                barStyle="light-content"
                hidden={false} />
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={80}>
                <ScrollView style={{ width: "100%" }}>

                    <View style={styles.inputs}>
                        <TextInput
                            label={'E-mail ou telefone'}
                            style={styles.input}
                            value={user}
                            onChangeText={(user) => setUser(user)}
                        />
                        <TextInput
                            label={'Senha'}
                            style={styles.input}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <Button
                        style={styles.login}
                        mode="contained"
                        labelStyle={{ color: "#BBA9F5", fontWeight: "bold" }}>Entrar</Button>
                    <Text style={styles.forgot}>Esqueceu sua senha?</Text>
                    <Button
                        style={[styles.login, styles.register]}
                        mode="contained"
                    >Cadastrar-se</Button>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BBA9F5',
        paddingBottom: 10
    },
    input: {
        height: 52,
        margin: 12,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#E8DEF8'
    },
    inputs: {
        marginTop: 150,
        marginHorizontal: 4,
    },
    login: {
        width: 330,
        marginHorizontal: 16,
        height: 43,
        paddingVertical: 3,
        backgroundColor: '#fff',
    },
    forgot: {
        textAlign: 'center',
        marginTop: 20,
        textDecorationLine: 'underline',
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        letterSpacing: 0.5
    },
    register: {
        backgroundColor: '#836BCF', 
        width: 230, 
        alignSelf: 'center', 
        marginTop: 60
    }
})