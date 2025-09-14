import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { ProductType } from '@/types/type';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import Animated, { FadeInDown } from 'react-native-reanimated';

type Props = {
    item : ProductType,
    index : number
}

const width = Dimensions.get('window').width - 40;

const ProductItem = ({item, index}: Props) => {

    return (
        <Animated.View 
        entering={FadeInDown.delay(300 + index * 100).duration(500)}
        style={styles.container}>
            <Image source={{uri: item.images[0]}} style={styles.productImage}/>
            <TouchableOpacity style={styles.bookmarkBtn}>
                <Ionicons name='heart-outline' size={22} color={Colors.black}/>
            </TouchableOpacity>
            <View style={styles.productInfo}>
                <Text style={styles.productPrice}>${item.price}</Text>
                <View style={styles.productRatingWrapper}>
                    <Ionicons name="star" size={20} color={"#D4AF37"} />
                    <Text style={styles.productRatingText}>4.7</Text>
                </View>
            </View>
            <Text style={styles.title}>{item.title}</Text>
        </Animated.View>
    );
}

export default ProductItem

const styles = StyleSheet.create({
    container : {
        width : width/2 - 10,


    },
    productImage : {
        width: "100%",
        height: 200,
        borderRadius: 15,
        marginBottom: 10
    },
    bookmarkBtn : {
        position : "absolute",
        top: 20,
        right: 20,
        backgroundColor: 'rgba(255,255,255, 0.6)',
        padding: 5,
        borderRadius: 30
    },
    title : {
        fontSize: 14,
        fontWeight :"600",
        letterSpacing: 1.1,
        color: Colors.black
    },
    productInfo : {
        flexDirection : "row",
        justifyContent: "space-between",
        marginBottom : 0
    },
    productPrice :{
        fontSize: 16,
        fontWeight : "700",
        color : Colors.primary
    },
    productRatingWrapper : {
        flexDirection: "row",
        alignItems :"center",
        gap: 5
    },
    productRatingText : {
        fontSize : 14,
        color : Colors.gray
    }
});