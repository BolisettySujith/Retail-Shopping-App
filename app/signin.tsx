import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'
import InputField from '@/Components/inputField'
import SocialLoginButton from '@/Components/SocialLoginButton'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

type Props = {}

const SignInScreen = (props: Props) => {
  return (
        <>
      <Stack.Screen 
        options={{
          headerTitle : "Sign In", 
          headerLeft : () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name='close' size={24} color={Colors.black}/>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Login to Your Account</Text>
        <InputField 
          placeholder='Email Address' 
          placeholderTextColor={Colors.black}
          autoCapitalize='none'
          keyboardType='email-address'
        />
        <InputField 
          placeholder='Password' 
          placeholderTextColor={Colors.black}
          secureTextEntry={true}
        />

        <TouchableOpacity 
          onPress={() => {
            router.dismissAll();
            router.push('/(tabs)');
          }} 
          style={styles.btn}
        >
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>

        <Text
          style={styles.loginText}
        >
          Dont' have an account? {" "}
          <Link href={"/signup"} asChild>
            <TouchableOpacity>
              <Text style={styles.textSpan}>SignUp</Text>
            </TouchableOpacity>
          </Link>
        </Text>

        <View style={styles.divider}/>
        <SocialLoginButton emailHref={"/signin"}/>
      </View>
    </>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background
  },
  title : {
    fontSize : 24,
    fontWeight : "600",
    letterSpacing : 1.2,
    color : Colors.black,
    marginBottom: 50
  },
  btn : {
    backgroundColor : Colors.primary,
    paddingVertical : 14,
    paddingHorizontal: 18,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20
  },
  btnTxt: {
    color : Colors.white,
    fontSize: 16,
    fontWeight: '600'
  },
  loginText : {
    marginTop : 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
    marginBottom: 30
  },
  textSpan : {
    color: Colors.primary,
    fontWeight: "600"
  },
  divider : {
    borderTopColor : Colors.gray,
    borderTopWidth : StyleSheet.hairlineWidth,
    width: '30%',
    marginBottom: 30
  }
})