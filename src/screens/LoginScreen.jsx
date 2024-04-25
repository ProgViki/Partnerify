import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
  return (
    <SafeAreaView className="h-full">
        <View className="w-full flex justify-center h-full px-4 my-6">
        <StatusBar style="light" />
      <Text>Welcome Back!</Text>
      <Text>Enter Your Details</Text>
      <Text>Login to continue your MPS</Text>
      <TextInput 
      placeholder='Ajani Ben D.'
      className='text-input'
      />
      <TextInput 
      placeholder='ajanibeni123456@gmail.com'
      className='text-input'
      />
      <TextInput 
      placeholder='Ajani Ben D.'
      className='text-input'
      />
    </View>
    </SafeAreaView>
    
  )
}

export default LoginScreen