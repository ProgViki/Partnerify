// import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import tw from 'tailwind-react-native-classnames';
import { FormField, CustomButton} from "../../components";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const SignUp = () => {
  

  return (
    <SafeAreaView style={tw`flex-1 w-full h-full`}>
      <ScrollView>
        <View
          style={tw`w-full flex justify-center h-full px-4 my-6 mx-auto`}
        >
         <Text className="text-2xl text-[#369FFF]">
            Create 
          </Text>
          <Text className="font-extrabold text-2xl text-[#369FFF]">
          An Account
          </Text>

          <Text className="text-xs ">
            Create an account to begin your MPS
          </Text>
          <FormField
            title="Full Name"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="name"
          />
          <FormField
            title="Email"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            // value={password}
            // handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
        <View className="mt-10">
         
            <Text style={{ fontSize: 14, fontWeight: 'thin', color: 'black', paddingBottom: 10}}>
              Don't have an account?
            </Text>
            <CustomButton
            title="Create Account"
            // handlePress={submit}
            containerStyles="mt-7"
            // isLoading={isSubmitting}
          />
          <Text className=" mt-12 text-center">Already have an account?</Text>
          <Text className="text-center mb-10 underline text-primary" ><Link href="/Home">sign in</Link>
          </Text>
          </View>
          
          <View className="mt flex flex-row justify-center gap-6 items-center">
            <View className="w-12 h-12 rounded-md pl-2 pt-2 mb-3"><FontAwesome5 name="facebook" size={24} color="black" /></View>
          <View className="w-12 h-12 rounded-md pl-2 pt-2 mb-3"><AntDesign name="wechat" size={24} color="black" /></View>
          <View className="w-12 h-12 rounded-md pl-2 pt-2 mb-3 "><FontAwesome name="google" size={24} color="black" /></View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
