import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CategoryType } from '@/types/type'
import { Colors } from '@/constants/Colors'

type Props = {
    categories : CategoryType[]
}

const Categories = ({categories}: Props) => {
  return (
    <View style={styles.container}> 
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>Categories</Text>
            <TouchableOpacity>
                <Text style={styles.titleBtn}>See All</Text>
            </TouchableOpacity>
        </View>
        <FlatList 
            data={categories}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({index, item}) => {
                return (
                    <TouchableOpacity>
                        <View style={styles.item}> 
                            <Image source={{uri : item.image}} style={styles.itemImage}/>
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableOpacity>

                );
            }}
        
        />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container : {
        marginTop : 20,
        marginBottom: 20
    },
    titleWrapper : {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom : 10,
        marginHorizontal: 20,
    },
    title : {
        fontSize : 18,
        fontWeight: "600",
        letterSpacing : 0.6,
        color : Colors.black
    },
    titleBtn : {
        fontSize : 14,
        fontWeight: "500",
        letterSpacing: 0.6,
        color: Colors.black
    },
    item : {
        marginVertical: 10,
        gap: 5,
        alignItems: "center",
        marginLeft: 20
    },
    itemImage : {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor : Colors.lightGray
    }
})