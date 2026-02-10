import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function History() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5">
        {/* --- HEADER --- */}
        <View className="flex-row justify-between items-center mt-4">
          <View>
            <Text className="text-gray-500 text-lg">Historique</Text>
          </View>
        </View>

        {/* --- TRANSACTION HISTORY --- */}
        <ScrollView className="mt-8">
          {/* Transaction Item */}
          <View className="flex-row justify-between items-center py-4 border-b border-gray-200">
            <View className="flex-row items-center">
              <Ionicons name="arrow-up" size={24} color="green" />
              <View className="ml-3">
                <Text className="text-black font-medium">Sent Bitcoin</Text>
                <Text className="text-gray-500 text-sm">To 0x123...abc</Text>
              </View>
            </View>
            <Text className="text-black font-bold">$500.00</Text>
          </View>

          {/* Item 1: Sent */}
          <View className="flex-row justify-between items-center mb-6">
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mr-4">    
                <Ionicons name="arrow-down" size={20} color="red" />
              </View>
              <View>
                <Text className="text-black font-medium">Received Bitcoin</Text>
                <Text className="text-gray-500 text-sm">From 0x456...def</Text>
              </View>
            </View>
            <Text className="text-black font-bold">$300.00</Text>
          </View>
          {/* Item 1: Sent */}
          <View className="flex-row justify-between items-center mb-6">
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mr-4">    
                <Ionicons name="arrow-down" size={20} color="red" />
              </View>
              <View>
                <Text className="text-black font-medium">Received Bitcoin</Text>
                <Text className="text-gray-500 text-sm">From 0x456...def</Text>
              </View>
            </View>
            <Text className="text-black font-bold">$300.00</Text>
          </View>
          {/* Item 1: Sent */}
          <View className="flex-row justify-between items-center mb-6">
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mr-4">    
                <Ionicons name="arrow-down" size={20} color="red" />
              </View>
              <View>
                <Text className="text-black font-medium">Received Bitcoin</Text>
                <Text className="text-gray-500 text-sm">From 0x456...def</Text>
              </View>
            </View>
            <Text className="text-black font-bold">$300.00</Text>
          </View>
          {/* Item 1: Sent */}
          <View className="flex-row justify-between items-center mb-6">
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mr-4">    
                <Ionicons name="arrow-down" size={20} color="red" />
              </View>
              <View>
                <Text className="text-black font-medium">Received Bitcoin</Text>
                <Text className="text-gray-500 text-sm">From 0x456...def</Text>
              </View>
            </View>
            <Text className="text-black font-bold">$300.00</Text>
          </View>
          {/* Item 1: Sent */}
          <View className="flex-row justify-between items-center mb-6">
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mr-4">    
                <Ionicons name="arrow-down" size={20} color="red" />
              </View>
              <View>
                <Text className="text-black font-medium">Received Bitcoin</Text>
                <Text className="text-gray-500 text-sm">From 0x456...def</Text>
              </View>
            </View>
            <Text className="text-black font-bold">$300.00</Text>
          </View>
        </ScrollView>
        </View>
        </SafeAreaView>
    );
    }