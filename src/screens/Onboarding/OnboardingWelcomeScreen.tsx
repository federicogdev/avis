import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AppStackParams } from "../../types/navigation";

const { width, height } = Dimensions.get("window");

interface IOnboardingWelcomeScreenProps {
  navigation: NativeStackNavigationProp<
    AppStackParams,
    "OnboardingWelcomeScreen"
  >;
}

const OnboardingWelcomeScreen: FC<IOnboardingWelcomeScreenProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.background}
        source={{
          uri: "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3BhcGVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80",
        }}
        resizeMode="cover"
      />
      <View style={[styles.background, styles.overflow]} />
      <View style={styles.content}>
        <Text style={styles.title}>AVIS</Text>
        <Text style={styles.subtitle}>News in your pocket</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.push("OnboardingCountryScreen");
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingWelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1d1b",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  overflow: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  content: {
    marginTop: "auto",
    alignItems: "flex-start",
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 24,
    textAlign: "left",
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    color: "#a1377f",
    textAlign: "center",
    marginBottom: 8,
  },
  button: {
    minWidth: "100%",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
