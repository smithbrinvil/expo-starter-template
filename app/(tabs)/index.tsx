import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5">

        {/* --- HEADER --- */}
        <View className="flex-row justify-between items-center mt-4">
          <View>
            <Text className="text-gray-500 text-lg">Bonsoir</Text>
            <Text className="text-2xl font-bold text-black">Smith Brinvil</Text>
          </View>

          {/* Avatar Image */}
          <Link href="/profile">
            <Image
              source={{ uri: 'https://i.pravatar.cc/100?img=11' }}
              className="w-12 h-12 rounded-full bg-gray-200"
            />
          </Link>
        </View>
        {/* --- PROMO BANNER --- */}
        <View className="bg-black rounded-3xl p-6 mt-8 flex-row justify-between items-center overflow-hidden">
          <View>
            <Text className="text-white text-lg font-semibold">Invite a friend and</Text>
            <Text className="text-white text-lg font-semibold">get $10 in BTC</Text>

            <View className="bg-gray-800 px-3 py-1 rounded-full self-start mt-3 flex-row items-center">
              <Text className="text-gray-300 text-xs mr-1">share invite</Text>
              <Ionicons name="chevron-forward" size={10} color="gray" />
            </View>
          </View>


          <View className="w-16 h-16 rounded-full border-2 border-gray-600 items-center justify-center opacity-50">
            <Ionicons name="logo-bitcoin" size={32} color="white" />
          </View>
        </View>
        {/* --- BALANCE SECTION --- */}
        <View className="mt-8">
          <Text className="text-gray-400 text-sm">Balance totale</Text>
          <View className="flex-row items-end mt-1">
            <Text className="text-4xl font-bold text-black">$23,980.90</Text>
            {/* Petit dropdown wallet */}
            <View className="bg-gray-100 px-2 py-1 rounded-lg ml-3 flex-row items-center">
              <Text className="text-xs text-gray-600 mr-1">Home wallet 1</Text>
              <Ionicons name="chevron-down" size={12} color="gray" />
            </View>
          </View>
          <Text className="text-green-500 font-medium mt-1">▲ $4,900 (49.9%)</Text>
        </View>

        {/* --- ACTION BUTTONS --- */}
        <View className="flex-row justify-between mt-8">
          {/* Bouton Send */}
          <View className="bg-gray-100 w-[30%] py-3 rounded-2xl flex-row justify-center items-center">
            <Ionicons name="paper-plane-outline" size={18} color="black" />
            <Text className="font-semibold ml-2">Envoyer</Text>
          </View>

          {/* Bouton Receive */}
          <View className="bg-gray-100 w-[30%] py-3 rounded-2xl flex-row justify-center items-center">
            <Ionicons name="qr-code-outline" size={18} color="black" />
            <Text className="font-semibold ml-2">Recevoir</Text>
          </View>

          {/* Bouton Swap/More */}
          <View className="bg-gray-100 w-[30%] py-3 rounded-2xl flex-row justify-center items-center">
            <Ionicons name="swap-horizontal" size={18} color="black" />
          </View>
        </View>




      </View>
      <ScrollView className="px-5">
        {/* --- ACTIVITY SECTION --- */}
        <View className="mt-8 border-b border-gray-200 mb-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold">Activity</Text>
            <Link href="/history"><Text className="text-gray-500">See all <Ionicons name="chevron-forward" size={12} color="gray" /></Text></Link>
          </View>

          {/* Item 1: Sent */}
          <View className="flex-row justify-between items-center mb-6">

            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mr-4">
                <Ionicons name="arrow-up" size={20} color="gray" />
              </View>
              <View>
                <Link href="/details">
                  <Text className="font-bold text-base">Sent to Kingsley Guillaume</Text>
                </Link>

                <Text className="text-gray-400 text-xs">23 min ago.</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="font-bold text-base text-black">$763.17</Text>
              <Text className="text-gray-400 text-xs">≈ 299 usdt</Text>
            </View>
          </View>

          {/* Item 2: Received */}
          <View className="flex-row justify-between items-center mb-6">
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mr-4">
                <Ionicons name="arrow-down" size={20} color="gray" />
              </View>
              <View>
                <Link href="/details">
                  <Text className="font-bold text-base">Received from Samuel Volcy</Text>
                </Link>
                <Text className="text-gray-400 text-xs">23 min ago.</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="font-bold text-base text-green-500">$563.17</Text>
              <Text className="text-gray-400 text-xs">≈ 299 usdt</Text>
            </View>
          </View>
          {/* Item 3: Received */}
          <View className="flex-row justify-between items-center mb-6">
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mr-4">
                <Ionicons name="arrow-down" size={20} color="gray" />
              </View>
              <View>
                <Link href="/details">
                  <Text className="font-bold text-base">Received from John Doe</Text>
                </Link>
                <Text className="text-gray-400 text-xs">23 min ago.</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="font-bold text-base text-green-500">$563.17</Text>
              <Text className="text-gray-400 text-xs">≈ 299 usdt</Text>
            </View>
          </View>

        </View>
        
        {/* ---Promotional section--- */}
        <View className="mb-10">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold">Promotional Offers</Text>
            <Link href="/history"><Text className="text-gray-500">See all <Ionicons name="chevron-forward" size={12} color="gray" /></Text></Link>
          </View>
          <View className="bg-gray-100 rounded-2xl p-4 flex-row items-center mb-6">
            <View className="w-12 h-12 bg-gray-300 rounded-full items-center justify-center mr-4">
              <Ionicons name="gift" size={20} color="gray" />
            </View>
            <View>
              <Text className="font-bold text-base">Get 10% off on trading fees</Text>
              <Text className="text-gray-400 text-xs">Use code: TRADE10</Text>
            </View>
          </View>

          <View className="bg-gray-100 rounded-2xl p-4 flex-row items-center mb-6">
            <View className="w-12 h-12 bg-gray-300 rounded-full items-center justify-center mr-4">
              <Ionicons name="gift" size={20} color="gray" />
            </View>
            <View>
              <Text className="font-bold text-base">Earn $5 in BTC for every referral</Text>
              <Text className="text-gray-400 text-xs">Share your referral code</Text>
            </View>
          </View>

          <View className="bg-gray-100 rounded-2xl p-4 flex-row items-center mb-6">
            <View className="w-12 h-12 bg-gray-300 rounded-full items-center justify-center mr-4">
              <Ionicons name="gift" size={20} color="gray" />
            </View>
            <View>
              <Text className="font-bold text-base">Limited Time: 20% off on NFT purchases</Text>
              <Text className="text-gray-400 text-xs">Use code: NFT20</Text>
            </View>
          </View>

        </View>
      </ScrollView>


    </SafeAreaView>
  );
}