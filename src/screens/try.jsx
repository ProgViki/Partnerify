import { View, Text } from 'react-native'
import React from 'react'

const Tryy = () => {
  return (
    <View>
     <View className="ml-4 w-[310px] h-[170px] bg-[#FF993A] rounded-2xl drop-shadow-lg mt-10">
<ImageBackground  source={require('../assets/images/Vector.png')} 
    className=" "
    resizeMode='contain'>
<View className="mt-6 ml-6"> 

<Text className="font-bold text-white  ">Loveworld TV/Radio</Text>
<Text className="font-bold text-2xl mb-2 text-white  ">50,000/month</Text>

<AntDesign name="setting" size={20} color="black" />
<View className="flex flex-row justify-between">
<ProgressCircle
    percent={50}
    radius={30}
    borderWidth={8}
    color="#FF7E07"
    shadowColor="#ffffff"
    bgColor="#FF993A"
    className="mt-5"
    sTryokeCap="round"
>
  <Text className="text-white text-sm font-bold">{'50%'}</Text>
</ProgressCircle>


<TouchableOpacity className="bg-white w-[150px] h-10 rounded-md mt-6 mr-5">
  <Text className="text-[#FF993A] text-center mt-2">Make Payment</Text>
</TouchableOpacity>
</View>
</View>
</ImageBackground>

</View>
<View className="ml-4 w-[310px] h-[170px] bg-[#FFD143] rounded-2xl drop-shadow-lg mt-10">
<ImageBackground  source={require('../assets/images/Vector.png')} 
    className=" "
    resizeMode='contain'>
<View className="mt-6 ml-6"> 

<Text className="font-bold text-white  ">Bibles</Text>
<Text className="font-bold text-2xl mb-2 text-white  ">50,000/month</Text>

<AntDesign name="setting" size={20} color="black" />
<View className="flex flex-row justify-between">
<ProgressCircle
    percent={25}
    radius={30}
    borderWidth={8}
    color="#FFC000"
    shadowColor="#ffffff"
    bgColor="#FFD143"
    className="mt-5"
    sTryokeCap="round"
>
  <Text className="text-white text-sm font-bold">{'75%'}</Text>
</ProgressCircle>


<TouchableOpacity className="bg-white w-[150px] h-10 rounded-md mt-6 mr-5">
  <Text className="text-[#FFD143] text-center mt-2">Make Payment</Text>
</TouchableOpacity>
</View>
</View>
</ImageBackground>

</View>
    </View>
  )
}

export default Tryy