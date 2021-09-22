import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { icons, images, COLORS, SIZES, FONTS } from '../constants'

const OnBoarding = ({ navigation }) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={images.onboardingImage}
                resizeMode='contain'
                style={{
                    width: '100%',
                    height: '100%'
                }}
            />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding * 1.5 }}>
                <Text style={{ ...FONTS.h2 }}>Digital Ticket</Text>
                <Text style={{ marginTop: SIZES.padding, color: COLORS.gray, textAlign: 'center', ...FONTS.body3 }}>Easy solution to buy tickets for your travel, business trips, transportation, lodging and culinary.</Text>
            </View>
            <TouchableOpacity
                style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                onPress={() => navigation.navigate('Home')}
            >
                <LinearGradient
                    style={{ width: '100%', height: '100%', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}
                    colors={['#46aeff', '#5884ff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Start !</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})

export default OnBoarding;