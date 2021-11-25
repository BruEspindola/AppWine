import React, { useRef } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper'
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function App() {
    const navigation = useNavigation();
    const scrollRef = useRef();

    return (
        <>
            <StatusBar hidden={true} />
            <Swiper
                ref={scrollRef}
                showsPagination={false}
                // paginationStyle={{ marginLeft: -250, marginBottom: 10 }} 
                showsButtons={false}
                loop={false}
            >

                <View testID="first" style={styles.first}>
                    <View style={{ position: 'absolute', marginLeft: '25%' }}>
                        <Image style={styles.image} source={require('../../assets/images/onboarding/first.png')} />
                    </View>

                    <Button
                        buttonStyle={styles.button}
                        title={'Next'}
                        titleStyle={{ color: '#E23E6D' }}
                        onPress={() => scrollRef.current?.scrollTo(1)}
                    />

                </View>


                <View testID="second" style={styles.second}>
                    <View style={{ position: 'absolute', marginLeft: '25%' }}>
                        <Image style={styles.image} source={require('../../assets/images/onboarding/second.png')} />
                    </View>
                    <Button
                        buttonStyle={styles.button}
                        title={'Next'}
                        titleStyle={{ color: '#E23E6D' }}
                        onPress={() => scrollRef.current?.scrollTo(2)}
                    />
                </View>


                <View testID="third" style={styles.third}>
                    <View style={{ position: 'absolute', marginLeft: '25%' }}>
                        <Image style={styles.image} source={require('../../assets/images/onboarding/third.png')} />
                    </View>
                    <Button
                        buttonStyle={[styles.button, { width: 200, marginLeft: '35%' }]}
                        title={'Get Start'}
                        titleStyle={{ color: '#E23E6D' }}
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>

            </Swiper>
        </>
    )
}
const styles = StyleSheet.create({
    text: {
        color: '#000'
    },
    first: {
        backgroundColor: '#E23E6D',
        flex: 1
    },
    second: {
        backgroundColor: '#F2BF17',
        flex: 1
    },
    third: {
        backgroundColor: '#5BBBD2',
        flex: 1
    },
    image: {
        marginTop: '50%',
    },
    button: {
        width: 78,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginTop: '143%',
        marginLeft: '70%'
    },
})