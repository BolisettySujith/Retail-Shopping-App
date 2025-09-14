import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown, FadeInRight, FadeOutDown } from "react-native-reanimated";
import SocialLoginButton from "@/Components/SocialLoginButton";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <ImageBackground 
        source={require("../assets/images/ecommerce-splash.jpg")}
        style={styles.image}
      >
        <View style={styles.container}>
          <LinearGradient 
            colors={["transparent", "rgba(255, 255, 255, 0.9)", "rgba(255, 255, 255, 1)"]}
            style = {styles.background}
          >
            <View style={styles.wrapper}>
              <Animated.Text style={styles.title} entering={FadeInRight.delay(300).duration(300).springify()}>ShopX</Animated.Text>
              <Animated.Text style={styles.description} entering={FadeInRight.delay(500).duration(300).springify()}>One Stop Solution For All Your Needs</Animated.Text>

              <SocialLoginButton emailHref={"/signup"}/>
              <Text
                style={styles.loginText}
              >
                Already have an account ? {" "}
                <Link href={"/signin"} asChild>
                  <TouchableOpacity>
                    <Text style={styles.textSpan}>SignIn</Text>
                  </TouchableOpacity>
                </Link>
              </Text>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image : {
    flex: 1,
    resizeMode: "cover"
  },
  background : {
    flex : 1,
    position : "absolute",
    top : 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent:"flex-end"
  },
  wrapper : {
    paddingBottom : 50,
    paddingHorizontal : 20,
    alignItems : "center"
  },
  title : {
    fontSize : 22,
    fontWeight : "700",
    letterSpacing : 2.4,
    color : Colors.primary,
  },
  description : {
    fontSize : 14,
    color : Colors.gray,
    letterSpacing : 1.2,
    lineHeight: 30,
    marginBottom : 20
  },

  loginText : {
    marginTop : 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24
  },
  textSpan : {
    color: Colors.primary,
    fontWeight: "600"
  }
});
