import React from 'react';
import { View, StatusBar, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
function Catalogo() {
    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor="#FFF"
                barStyle="dark-content"
                hidden={false} />
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={80}>
                <ScrollView style={{ width: "100%" }}>
                    <View>
                        <Text style={styles.name}>Olá, </Text><Text style={[styles.name, { marginTop: -27, marginLeft: 55, color: '#F55646' }]}>Bruna</Text>
                        <TextInput
                            placeholder="Filtro"
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.search}>
                            <Icon name="search" size={24} color="#FFF" style={{ alignSelf: 'center', marginTop: 5 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 16, marginTop: 24 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <View style={styles.pills}><Text style={styles.text}>Carbenet</Text></View>
                            <View style={styles.pills}><Text style={styles.text}>Merlot</Text></View>
                            <View style={styles.pills}><Text style={styles.text}>Malbec</Text></View>
                            <View style={styles.pills}><Text style={styles.text}>Carménère</Text></View>
                        </ScrollView>
                    </View>
                    <Text style={styles.name}>Comida</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 16, marginTop: 24 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <View><View style={styles.pillsImage}><Image source={require('../../assets/images/catalogo/Japonesa.png')} /></View><Text style={[styles.catalogoName, {marginLeft: 24}]}>Japonesa</Text></View>
                        <View><View style={styles.pillsImage}></View></View>
                        <View><View style={styles.pillsImage}></View></View>
                        <View><View style={styles.pillsImage}></View></View>
                        </ScrollView>
                    </View>
                    <Text style={styles.name}>Tipos de vinhos</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 16, marginTop: 24 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <View><View style={styles.pillsImage}><Image source={require('../../assets/images/catalogo/Vinho.png')} /></View><Text style={[styles.catalogoName, { marginLeft: 22 }]}>Espumante</Text></View>
                            <View><View style={styles.pillsImage}></View></View>
                            <View><View style={styles.pillsImage}></View></View>
                            <View><View style={styles.pillsImage}></View></View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingBottom: 10
    },
    name: {
        fontSize: 20,
        fontWeight: '800',
        marginLeft: 16,
        marginTop: 25,
        color: '#000'
    },
    input: {
        borderColor: '#D0D0D0',
        borderWidth: 1.5,
        height: 38,
        textAlignVertical: 'center',
        marginTop: 5,
        backgroundColor: '#F8F8F8',
        borderRadius: 20,
        width: '90%',
        paddingLeft: 20,
        alignSelf: 'center',
        marginTop: 24,
        fontSize: 14
    },
    search: {
        width: 69,
        height: 36,
        backgroundColor: '#F55646',
        borderRadius: 20,
        position: 'absolute',
        marginTop: 77,
        marginLeft: 272,
        opacity: 0.8
    },
    pills: {
        width: 105,
        height: 32,
        backgroundColor: '#F8D3DD',
        marginRight: 14,
        borderRadius: 20
    },
    text: {
        textAlign: 'center',
        marginTop: 5,
        color: '#000',
        fontSize: 15
    },
    pillsImage: {
        // borderColor: '#000',
        width: 121,
        height: 151,
        marginRight: 14,
        borderRadius: 20,
        backgroundColor: '#F8D385'

    },
    catalogoName: {
        marginTop: 8,
        color: '#E23E6D',
        fontSize: 16
    }

})
export { Catalogo }