import { View, Text, TouchableOpacity, ScrollView  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, Feather, FontAwesome, Entypo, MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';

const More = () => {
  return (
    <SafeAreaView className="mt-6 ">
     <ScrollView>
     <View className=" mx-10">
     
      <View className="w-24 h-24 mx-auto rounded-full bg-gray-300 my-4"><Text className="text-center mt-8">sdfg</Text></View>
     
     <View>
     <Text className="pb-4">Account</Text>
      <TouchableOpacity className="w-[310px] h-[80px] bg-[#DDEAF0] flex flex-row gap-2 mb-10 rounded-lg pl-4 border border-primary">
        <Text className="w-10 h-10 bg-white rounded-full border border-primary pl-3 pt-2"><FontAwesome name="lock" size={22} color="#369FFF" /></Text>
          <Text className="p-2">My Profile</Text>
      </TouchableOpacity>
     </View>
      <View className="flex flex-col">
      <Text className="pb-4">Security</Text>
<TouchableOpacity className="w-[310px] h-[120px]  bg-[#DDEAF0] flex flex-col gap-2 mb-10 rounded-lg pl-4 border border-primary">
      <View className="flex flex-row  pt-4">
        <Text className="w-10 h-10 bg-white rounded-full border border-primary pl-3 pt-2"><FontAwesome name="lock" size={22} color="#369FFF" /></Text>
            <Text className="p-2">Change password</Text>
      </View>
      <View className="flex flex-row pb-4">
        <Text className="w-10 h-10 bg-white rounded-full border border-primary p-2"><MaterialIcons name="password" size={22} color="#369FFF" /></Text>  
      <Text className="p-2">Reset password</Text>
      </View>
     
</TouchableOpacity>
      </View>

      <View className="flex flex-col">
      <Text className="pb-4">Help</Text>
<TouchableOpacity className="w-[310px] h-[120px]  bg-[#DDEAF0] flex flex-col gap-2 mb-10 rounded-lg pl-4 border border-primary">
      <View className="flex flex-row  pt-4">
      <Text className="w-10 h-10 bg-white rounded-full border border-primary p-2">
      <MaterialIcons name="headset" size={22} color="#369FFF" /></Text>  

      <Text className="pl-2 pt-2">Customer Service</Text>
      </View>
      <View className="flex flex-row pb-4">
      <Text className="w-10 h-10 bg-white rounded-full border border-primary p-2"><MaterialCommunityIcons name="chat-processing" size={22} color="#369FFF" /></Text>  

      
      <Text className="pl-2 pt-2">Chat with us</Text>
      </View>  
</TouchableOpacity>
     
     
<TouchableOpacity className="w-[310px] h-[70px] pl-4 pt-2 bg-[#DDEAF0] flex flex-row gap-2 rounded-lg mb-10 border border-primary">
<Text className="w-10 h-10 bg-white rounded-full border border-primary p-2"><Ionicons name="log-out" size={22} color="#369FFF" /></Text>  


<Text className="pt-2 pl-2">Log Out</Text>
</TouchableOpacity>
     </View>

    </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default More