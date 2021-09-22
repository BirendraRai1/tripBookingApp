import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images, icons, COLORS, SIZES, FONTS } from '../constants';

const Home = ({ navigation }) => {

    //Dummy Data
    const [destinations, setDestination] = useState([
        {
            id: 0,
            name: "Ski Villa",
            img: images.skiVilla,
        },
        {
            id: 1,
            name: "Climbing Hills",
            img: images.climbingHills,
        },
        {
            id: 2,
            name: "Frozen Hills",
            img: images.frozenHills,
        },
        {
            id: 3,
            name: "Beach",
            img: images.beach,
        },
    ])

    const OptionItem = ({ bgColor, icon, label, onPress }) => (
        <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={onPress}
        >
            <View style={[styles.shadow, { height: 60, width: 60 }]}>
                <LinearGradient
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', borderRadius: 15 }}
                    colors={bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Image
                        source={icon}
                        resizeMode='cover'
                        style={{
                            tintColor: COLORS.white,
                            width: 30,
                            height: 30
                        }}
                    />
                </LinearGradient>
            </View>
            <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{label}</Text>
        </TouchableOpacity>
    )

    const renderDestinations = (item, index) => {
        var destinationStyle = {};
        if (index == 0) {
            destinationStyle = { marginLeft: SIZES.padding }
        }
        return (
            <TouchableOpacity
                style={{ alignItems: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
                onPress={() => { navigation.navigate('DestinationDetail') }}
            >
                <Image
                    source={item.img}
                    resizeMode='cover'
                    style={{
                        width: SIZES.width * 0.28,
                        height: '55%',
                        borderRadius: 15
                    }}
                />
                <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {/* {Banner} */}
            <View style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding }}>
                <Image
                    source={images.homeBanner}
                    resizeMode='cover'
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 15
                    }}
                />
            </View>

            {/* {Options} */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.base, paddingHorizontal: SIZES.padding }}>
                    <OptionItem
                        icon={icons.airplane}
                        bgColor={['#46aeff', '#5884ff']}
                        label='flight'
                        onPress={() => console.log('Flight')}
                    />
                    <OptionItem
                        icon={icons.train}
                        bgColor={['#fddf90', '#fcda13']}
                        label='Train'
                        onPress={() => console.log('Train')}
                    />
                    <OptionItem
                        icon={icons.bus}
                        bgColor={['#e973ad', '#da5df2']}
                        label='Bus'
                        onPress={() => console.log('Bus')}
                    />
                    <OptionItem
                        icon={icons.taxi}
                        bgColor={['#fcaba8', '#fe6bba']}
                        label='Taxi'
                        onPress={() => console.log('Taxi')}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: SIZES.base, paddingHorizontal: SIZES.padding }}>
                    <OptionItem
                        icon={icons.bed}
                        bgColor={['#ffc465', '#ff9c5f']}
                        label='Hotel'
                        onPress={() => console.log('Hotel')}
                    />
                    <OptionItem
                        icon={icons.eat}
                        bgColor={['#7cf1fb', '#4ebefd']}
                        label='Eats'
                        onPress={() => console.log('Eats')}
                    />
                    <OptionItem
                        icon={icons.compass}
                        bgColor={['#7be993', '#46caaf']}
                        label='Adventure'
                        onPress={() => console.log('Adventure')}
                    />
                    <OptionItem
                        icon={icons.event}
                        bgColor={['#fca397', '#fc7b6c']}
                        label='Event'
                        onPress={() => console.log('Event')}
                    />
                </View>
            </View>

            {/* {Destination} */}
            <View style={{ flex: 1.5 }}>
                <Text style={{ paddingHorizontal: SIZES.padding, ...FONTS.h2 }}>Destination</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={destinations}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => renderDestinations(item, index)}
                />
            </View>
        </View>
    )
}

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
export default Home;