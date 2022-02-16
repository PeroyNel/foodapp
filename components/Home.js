import * as React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

export default Home = () => {
  return (
    <View style={styles.container}>
        <SafeAreaView>
            <View style={styles.headerWrapper}>
                <Image source={require('../assets/images/profile.png')} style={styles.profileImage}/>
                <Feather name="menu" size={24} color={colors.textDark}/>
            </View>
        </SafeAreaView>

        <View style={styles.titleWrapper}>
            <Text style={styles.titleSubtitle}>Food</Text>
            <Text style={styles.titleTitle}>Delivery</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,

    },
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,

    },
    titleSubtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.textDark,

    },
    titleTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,

    },
  });