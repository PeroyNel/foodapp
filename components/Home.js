import * as React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, FlatList, ScrollView } from 'react-native';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

export default Home = () => {
    const renderCategoryItem = ({ item }) => {
        return (
            <View style={[styles.categoriesItemWrapper, 
                {
                    backgroundColor: item.selected ? colors.primary : colors.white,
                    marginLeft: item.id == 1 ? 20 : 0,
                    },
                  ]}>
                  <Image source={item.image} style={styles.categoriesItemImage}/>
                  <Text style={styles.categoriesItemTitle}>{item.title}</Text>
                  <View style={[styles.categoriesSelectWrapper, {
                     backgroundColor: item.selected ? colors.white : colors.secondary, 
                  }]}>
                      <Feather style={styles.categoriesSelectIcon} name="chevron-right" size={8} color={item.selected ? colors.black : colors.white}/>
                  </View>

            </View>
            );
    };

  return (
    <View style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
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

            <View style={styles.popularWrapper}>
                <Text style={styles.popularTitle}>Popular</Text>
                {popularData.map(item => (
                    <View key={item.id} style={[styles.popularCardWrapper, 
                        {
                        marginTop: item.id == 1 ? 10 : 20,
                        },
                    ]}>
                        <View>
                            <View>
                                <View style={styles.popularTopWrapper}>
                                    <MaterialCommunityIcons name="crown" size={12} color={colors.primary} />
                                    <Text style={styles.popularTopText}>Top of the week</Text>
                                </View>
                                <View style={styles.popularTitlesWrapper}>
                                    <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                    <Text style={styles.popularTitlesWeight}>Weight: {item.weight}</Text>
                                </View>
                            </View>
                            <View style={styles.popularCardBottom}>
                                <View style={styles.addPizzaButton}>
                                    <Feather name="plus" size={10}/>

                                </View>
                                <View style={styles.ratingWrapper}>
                                    <MaterialCommunityIcons name="star" size={10} color={colors.textDark} />
                                    <Text style={styles.rating}>{item.rating}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.popularCardRight}>
                            <Image source={item.image} style={styles.popularCardImage} />
                        </View>
                    </View>
                ))}

            </View>
        </ScrollView>

    </View>
  );
};

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
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,

    },
    categoriesItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        borderRadius: 20,
        alignSelf: 'center',
        marginHorizontal: 20,

    },
    categoriesItemTitle: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,

    },
    categoriesSelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,

    },
    categoriesSelectIcon: {
        alignSelf: 'center',

    },
    popularWrapper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,

    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,

    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,

    },
    popularTitlesWrapper: {
        marginTop: 20,
        
    },
    popularTitlesTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textDark,
    },
    popularTitlesWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textLight,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItem: 'center',
        marginTop: 10,
        marginLeft: -20,

    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,

    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    rating: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: colors.textDark,
        marginLeft: 5,

    },
    popularCardRight: {
        marginLeft: 20,

    },
    popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',

    },      
  });