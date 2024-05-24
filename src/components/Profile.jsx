import { View, Text, TouchableOpacity, ScrollView, TextInput  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, Feather, FontAwesome, Entypo, MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';


const Profile = () => {
  return (
    <SafeAreaView className="mt-6 ">
        <ScrollView>
            <View>
            <View className="flex flex-row gap-2 items-center">
      <Text className="w-7 h-7 bg-black p-1"><Ionicons name="arrow-back" size={20} color="white" /></Text> 
      <Text className="font-bold text-lg ">More</Text>
      </View>

      <View>
      <FormField
            title="Title"
            placeholder="Mr"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
           <FormField
            title="Full Name"
            placeholder="Mr"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
           <FormField
            title="Email"
            placeholder="Email"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
           <FormField
            title="Phone Number"
            placeholder="Phone Number"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
           <FormField
            title="Birthday"
            placeholder=""
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
           <FormField
            title="Title"
            placeholder="Mr"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
            <FormField
            title="Church Name"
            placeholder="Mr"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Church Name"
            placeholder="Mr"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Wedding Anniversary"
            placeholder="Mr"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          
           <FormField
            title="Country"
            placeholder="Mr"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
           <FormField
            title="Name of Zone"
            placeholder="Mr"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
           <FormField
            title="Cell Name"
            placeholder="Mr"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Church Name"
            placeholder="Mr"
            // value={email}
            // handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
        <CustomButton
            title="Update"
            // handlePress={submit}
            containerStyles="mt-7"
            // isLoading={isSubmitting}
          />
      </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Profile