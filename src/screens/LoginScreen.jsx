import {
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { LogoSvg } from "../../assets/svg/svg";
import { h, w } from "../../components/constants";
import { Link } from "expo-router";
//   import { Feather, FontAwesome5 } from "@expo/vector-icons";
// const navigation = useNavigation();

const options = [
  {
    img: require("../../assets/images/img1.png"),
    text: "Real Estate Agent",
  },
  {
    img: require("../../assets/images/img2.png"),
    text: "Looking for Rommate",
  },
  {
    img: require("../../assets/images/img3.png"),
    text: "Landlord",
  },
];

const SignUp = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  return (
    <ImageBackground
      source={require("../../assets/images/auth_bg.png")}
      style={{ ...StyleSheet.absoluteFillObject }}
    >
      <SafeAreaView />
      <View style={styles.logoBox}>
        <LogoSvg />
        <Text style={styles.headText}>
         A sound Partnership App to use in your church.
        </Text>
      </View>

      <View style={styles.bottomBox}>
        <Text
          style={{
            marginTop: 30,
            fontSize: 20,
            width: "80%",
            textAlign: "center",
            fontWeight: "500",
            alignSelf: "center",
          }}
        >
          How would you like to sign up on the app?
        </Text>

        {/* ----------------------SIGN UP OPTIONS----------------------- */}

        <View style={{ marginTop: 20 }}>
          {options.map((e, i) => (
            <TouchableOpacity
              key={i.toString()}
              style={[
                styles.optionBox,
                { backgroundColor: currentIndex === i ? "#9D69FB" : "white" },
              ]}
              onPress={() => {
                setCurrentIndex(i);
              }}
            >
              <Image
                source={e.img}
                style={{
                  width: 60,
                  height: 60,
                  marginRight: 20,
                }}
              />
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 18,
                  color: currentIndex === i ? "white" : "black",
                }}
              >
                {e.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100 font-semibold">
            Have an account already?
          </Text>
          <Link
            href="/Login"
            className="text-lg font-bold text-secondary"
          >
            Login
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  logoBox: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 30,
  },
  headText: {
    fontSize: 14,
    textAlign: "center",
    width: w * 0.8,
    color: "#FFF",
    fontWeight: "600",
    marginTop: 20,
  },
  bottomBox: {
    width: w,
    backgroundColor: "#FFF",
    height: h * 0.55,
    position: "absolute",
    bottom: 0,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    // alignItems: "center",
    paddingHorizontal: "10%",
  },
  button1: {
    backgroundColor: "#000",
    width: w * 0.8,
    height: 50,
    borderRadius: 30,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  button2: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: w * 0.8,
    height: 50,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 30,
    // borderColor: "#C4C4C4",
    borderColor: "#000",
  },
  optionBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#BCDAF780",
    borderRadius: 15,
  },
});
