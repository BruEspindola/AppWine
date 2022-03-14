import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'

export default Login = () => {
    const navigation = useNavigation();
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
                <Text style={styles.welcome}>Welcome Back!</Text>
                    <View style={styles.inputs}>
                        <TextInput
                            mode='outlined'
                            outlineColor={'#E0D8FB'}
                            label={'E-mail ou telefone'}
                            style={[styles.input, {marginBottom: 31}]}
                            value={user}
                            left={<TextInput.Icon name={() => <Icon name={'user'} size={18} style={{marginTop: 8}} />} />}
                            onChangeText={(user) => setUser(user)}
                        />
                        <TextInput
                            mode='outlined'
                            outlineColor={'#E0D8FB'}
                            label={'Senha'}
                            style={styles.input}
                            secureTextEntry={true}
                            value={password}
                            left={<TextInput.Icon name={() => <Icon name={'lock'} size={18} style={{marginTop: 8}} />} />}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <Text style={styles.forgot}>Esqueceu sua senha?</Text>
                    <Button
                        style={styles.login}
                        mode="contained"
                        onPress={() => navigation.navigate('Catalogo')}
                        labelStyle={{ color: "#BBA9F5", fontWeight: "bold" }}>Entrar</Button>
                    
                    <Button
                        style={[styles.login, styles.register]}
                        mode="contained"
                        onPress={() => navigation.navigate('SignUp')}
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
    welcome:{
        position: 'absolute',
        fontSize: 35,
        width: 150,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 22,
        marginTop: 16,
    },
    input: {
        height: 55,
        width: 317,
        borderRadius: 10,
        backgroundColor: '#E0D8FB',
        fontSize: 14
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
        marginTop: 49
    },
    forgot: {
        textAlign: 'right',
        marginRight: 25,
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
        width: 176,
        alignSelf: 'center',
        marginTop: 60
    }
})