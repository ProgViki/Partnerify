import { View, Text, Image, FlatList, ScrollView, TouchableOpacity,  } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import CardOne from '../components/CardOne';
import CardTwo from '../components/CardTwo';
import CardThree from '../components/CardThree';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';




const Home = () => {

    const showTable = {
        tableHead: ['PAYMENT ID', 'STATUS', 'AMOUNT', 'PAYMENT DATE'],
        tableData: [
            ['1', 'Succeeded', '$5000', 'Mar 23, 2022, 13:00PM'],
            ['2', 'Pending', '$6000', 'Mar 24, 2022, 13:00PM'], 
            ['3', 'Declined', '$7000', 'Mar 25, 2022, 13:00PM'],

        ]
    }
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: <CardOne />
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: <CardTwo />
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: <CardThree />
        },
      ];
      const Item = ({title}) => (
        <View className="">
          {title}
        </View>
      );

  return (
   <SafeAreaView className="mt-18 ml-5 flex-1">
    <ScrollView>
    <View className="mt-10 flex flex-row justify-between">
        <View className="pl-2 flex flex-row items-center gap-2">
        <Image 
            source={require("../assets/images/homeimage.png")}
            className="h-14 w-14 mt-10 rounded-md"
        />
        <Text>Hello! {"\n"}Good Afternoon</Text>
        </View>
        <View className="ml-10 pr-8 pt-4">
        <EvilIcons name="bell" size={34} color="black" />
         <View className="w-[7px] h-[7px] rounded-full bg-red-600"></View>
        </View>
 
    </View>
    <View className="bg-gray-200 mt-10">
        <Text className="pt-5 pl-5 text-md font-bold">Giving Target</Text>
        
        <FlatList data={DATA} renderItem={({item}) => <Item title={item.title} />} 
        keyExtractor={item => item.id} horizontal={true}
        showsHorizontalScrollIndicator={false}
        />
       
    </View>

    <View className="">
    <Text className="pl-5 pt-5 text-lg font-bold mb-8">Partnership Giving Type</Text>
    <View className="flex flex-row flex-wrap gap-2">
    <View className="w-[160px] h-[60px] bg-gray-200 flex flex-row justify-center items-center gap-2 rounded-xl ml-2">
    <Text className="w-8 h-8 bg-[#369FFF] opacity-20 text-center pb rounded-xl text-[6px]"><MaterialIcons name="live-tv" size={24} color="#369FFF" className=""/></Text>
    <Text className="font-bold text-[10px]">Loveworld TV/Radio</Text>
    </View>
    <View className="w-[160px] h-[60px] bg-gray-200 flex flex-row justify-center items-center gap-2 rounded-xl ml-2 mt-2">
    <Text className="w-8 h-8 bg-[#369FFF] opacity-20 text-center pb text-[6px] rounded-xl"><MaterialIcons name="live-tv" size={24} color="#369FFF" className=""/></Text>
    <Text className="font-bold text-[10px]">Loveworld TV/Radio</Text>
    </View>
    <View className="w-[160px] h-[60px] bg-gray-200 flex flex-row justify-center items-center gap-2 rounded-xl ml-2 mt-2">
    <Text className="w-8 h-8 bg-[#369FFF] opacity-20 text-center pb text-[6px] rounded-xl"><MaterialIcons name="live-tv" size={24} color="#369FFF" className=""/></Text>
    <Text className="font-bold text-[10px]">Loveworld TV/Radio</Text>
    </View>
    </View>
    
    </View>
    <View className="flex-1 my-10 ">
        <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
          <Row data={showTable.tableHead} />
          <Rows data={showTable.tableData} />
        </Table>
      </View>

     <TouchableOpacity
        className="bg-primary w-[150px] h-[50px] rounded-xl mx-auto mb-10"git 
        >
        <Text className="text-center mt-3 text-white text-lg">see more</Text>
     </TouchableOpacity>
    </ScrollView>
   </SafeAreaView>
  )
}

export default Home