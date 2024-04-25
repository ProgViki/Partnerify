import { View, Text, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import ProgressCircle from 'react-native-progress-circle'
import { Feather, AntDesign, Ionicons, Octicons, FontAwesome6 } from "@expo/vector-icons";
const CardThree = () => {
  return (
    <View className="ml-4 w-[310px] h-[170px] bg-[#FFD143] rounded-2xl drop-shadow-lg mt-10">
    <ImageBackground  source={require('../assets/images/Vector.png')} 
        className=" "
        resizeMode='contain'>
    <View className="mt-6 ml-6 flex flex-row justify-between"> 
    <View className="">
        <Text className="font-bold text-white  ">Healing School</Text>
        <Text className="font-bold text-2xl mb-2 text-white  ">50,000/month</Text>
    </View>
  
  <View className="mr-5 mb-5"><AntDesign name="setting" size={20} color="white" /></View>
  </View>
  <View>
  <View className="flex flex-row justify-around">
  <ProgressCircle
        percent={25}
        radius={30}
        borderWidth={8}
        color="#FFC000"
        shadowColor="#ffffff"
        bgColor="#FFD143"
        className="mt-5"
        strokeCap="round"
    >
      <Text className="text-white font-bold text-sm">{'75%'}</Text>
    </ProgressCircle>
 
 
    <TouchableOpacity className="bg-white w-[150px] h-10 rounded-md mt-6 mr-5">
    <Text className="text-[#FFD143] text-center mt-2">Make Payment</Text>
    </TouchableOpacity>
    </View>
  </View>
    </ImageBackground>
  
</View>
  )
}

export default CardThree