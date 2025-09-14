import { StyleSheet, Text, Pressable, GestureResponderEvent, View } from 'react-native'
import React, { ReactNode } from 'react'
import { icon } from '@/constants/Icons';
import { Colors } from '@/constants/Colors';

type Props = {
    onPress: (event: GestureResponderEvent) => void;
    onLongPress?: (event: GestureResponderEvent) => void;
    isFocused: boolean,
    label: string,
    routeName : string
}

const TabBarButton = (props: Props) => {
    
    const { onPress, onLongPress, isFocused, label, routeName} = props;
    
    return (
        <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.tabBarBtn}
        >
            {routeName == 'cart' && (
                <View style={styles.badgeWrapper}>
                    <Text style={styles.badgeTxt}>3</Text>
                </View>
            )}

            {icon[routeName]({
                color : isFocused ? Colors.primary : Colors.black
            })}
            <Text style={{ color: isFocused ? "#673ab7" : '#222' }}>{label}</Text>
        </Pressable>
    );
}

export default TabBarButton

const styles = StyleSheet.create({
    tabBarBtn : {
        flex: 1,
        justifyContent:"center",
        alignItems : "center",
        gap: 5
    },
    badgeWrapper : {
        position: "absolute",
        backgroundColor : Colors.highlight,
        top: -10,
        right: 20,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 100,
        zIndex: 10
    },
    badgeText : {
        color: Colors.black,
        fontSize: 12
    }
})