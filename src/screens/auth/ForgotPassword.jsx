// import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import tw from 'tailwind-react-native-classnames';
import { FormField, CustomButton} from "../../components";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const ForgotPassword = () => {
  

  return (
    <SafeAreaView style={tw`flex-1 w-full h-full`}>
      <ScrollView>
        <View
          style={tw`w-full flex justify-center h-full px-4 my-6 mx-auto`}
        >
         <Text style={{ fontSize: 24, fontWeight: 'medium', color: '#369FFF'}}>
            Forget Password!
          </Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#369FFF'}}>
            Enter Your Email
          </Text>

          <Text style={{ fontSize: 14, fontWeight: 'thin', color: '#369FFF'}}>
            Enter the email associated with your account and we'll send
            a verification code to your email.
          </Text>

          <FormField
            title="Email"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />


          <CustomButton
            title="Forget Password"
            // handlePress={submit}
            containerStyles="mt-7"
            // isLoading={isSubmitting}
          />
          <Text style={{ fontSize: 14, fontWeight: 'thin', color: '#A90116'}}>Forget Password?</Text>
          <View style={{ marginTop: 20}}>
          </View>
          
          <View className="flex justify-around items-center bg-gray-700">
            <View style={{width: '60px', height: '60px', backgroundColor: '#A90116', borderRadius: 10,}}><FontAwesome5 name="facebook" size={24} color="black" /></View>
          <View><AntDesign name="wechat" size={24} color="black" /></View>
          <View className="bg-slate-400"><FontAwesome name="google" size={24} color="black" /></View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
