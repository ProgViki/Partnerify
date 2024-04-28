import { View, Text, TouchableOpacity, ScrollView  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, Feather, FontAwesome, Entypo, MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';
import {  } from '@expo/vector-icons';

const More = () => {
  return (
    <SafeAreaView className="mt-6 ">
     <ScrollView>
     <View className=" mx-10">
     <Ionicons name="arrow-back" size={35} color="black" />
     <Feather name="arrow-left-circle" size={24} color="blue" />
      <Text className="font-bold ">More</Text>
      <View className="w-20 h-20 mx-auto rounded-full bg-gray-300 my-4"><Text className="text-center mt-8">sdfg</Text></View>
     
     <View>
     <Text className="pb-4">Account</Text>
      <TouchableOpacity 
            className="w-[310px] h-[80px] bg-blue-200 flex flex-row gap-2 mb-10 rounded-lg">
          <Ionicons name="person-circle" size={24} color="blue" />
          <Text className="">Profile</Text>
      </TouchableOpacity>
     </View>
      <View className="flex flex-col">
      <Text className="pb-4">Security</Text>
<TouchableOpacity className="w-[310px] h-[100px]  bg-blue-200 flex flex-col gap-2 mb-10 rounded-lg pl-4">
      <View className="flex flex-row  pt-4">
      <FontAwesome name="lock" size={24} color="black" />
            <Text className="">Change password</Text>
      </View>
      <View className="flex flex-row pb-4">
      <MaterialIcons name="password" size={24} color="black" />
      <Text className="">Reset password</Text>
      </View>
     
</TouchableOpacity>
      </View>

      <View className="flex flex-col">
      <Text className="pb-4">Help</Text>
<TouchableOpacity className="w-[310px] h-[100px]  bg-blue-200 flex flex-col gap-2 mb-10 rounded-lg pl-4">
      <View className="flex flex-row  pt-4">
      <MaterialIcons name="headset" size={24} color="black" />
      <Text className="">Customer Service</Text>
      </View>
      <View className="flex flex-row pb-4">
      <MaterialCommunityIcons name="chat-processing" size={24} color="black" />
      <Text className="">Chat with us</Text>
      </View>  
</TouchableOpacity>
     
     
<TouchableOpacity className="w-[310px] h-[50px]  bg-blue-200 flex flex-row gap-2 rounded-lg">
<Ionicons name="log-out" size={24} color="black" />
<Text className="">Profile</Text>
</TouchableOpacity>
     </View>

    </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default More