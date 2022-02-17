import * as React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

export default Home = () => {
    const renderCategoryItem = ({ item }) => {
        return (
            <View style={styles.categoriesItemWrapper}>
                <Image source={item.image} style={styles.categoriesItemImage}/>
                <Text style={styles.categoriesItemTitle}>{item.title}</Text>
                <View style={styles.categoriesSelectWrapper}>
                    <Feather style={styles.categoriesSelectIcon} name="chevron-right" size={8}/>
                </View>

            </View>
            );
    };

  return (
    <View style={styles.container}>
        <SafeAreaView>
            <View style={styles.headerWrapper}>
                <Image source={require('../assets/images/profile.png')} style={styles.profileImage}/>
                <Feather name="menu" size={24} color={colors.textDark}/>
            </View>
        </SafeAreaView>

        {/* Titles */}

        <View style={styles.titleWrapper}>
            <Text style={styles.titleSubtitle}>Food</Text>
            <Text style={styles.titleTitle}>Delivery</Text>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
            <Feather name="search" size={16} color={colors.textDark}/>
            <View style={styles.search}>
                <Text style={styles.searchText}>Search</Text>
            </View>
        </View>

        {/* Categories */}

        <View style={styles.categoriesWrapper}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <View style={styles.categoriesListWrapper}>
                <FlatList data={categoriesData} renderItem={renderCategoryItem} keyExtractor={(item) => item.id} horizontal={true}/>
            </View>

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
        marginTop: 5,

    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,

    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,


    },
    searchText: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight,

    },
    categoriesWrapper: {
        marginTop: 30,

    },
    categoriesTitle: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        paddingHorizontal: 20,

    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,

    },
    categoriesItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 20,

    },
    categoriesItemImage: {

    },
    categoriesItemTitle: {

    },
    categoriesSelectWrapper: {

    },
    categoriesSelectIcon: {

    },   
  });