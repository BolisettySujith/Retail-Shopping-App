import { StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props = {}

const Header = (props: Props) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Text style={styles.logo}>ShopX</Text>
            <Link href={"/explore"} asChild>
                <TouchableOpacity style={styles.searchBar}>
                    <Text style={styles.searchTxt}>Search</Text>
                    <Ionicons name='search-outline' size={24} color={Colors.black}/>
                </TouchableOpacity>
                
            </Link>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor : Colors.white,
        paddingHorizontal: 20,
        paddingBottom : 10,
        gap: 15
    },
    logo : {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.primary
    },
    searchBar : {
        flex: 1,
        flexDirection : "row",
        justifyContent:"space-between",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: Colors.background
    },
    searchTxt : {
        color : Colors.gray
    }
})