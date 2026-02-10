import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function TransferDetails() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header avec retour */}
            <View className="px-5 flex-row items-center justify-between mt-4 mb-6">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text className="text-lg font-bold">Détails du transfert</Text>
                <View className="w-6" />
            </View>

            <ScrollView className="px-5">
                {/* Status Badge */}
                <View className="bg-green-100 px-4 py-2 rounded-full self-start mb-6">
                    <Text className="text-green-600 font-semibold text-sm">✓ Complété</Text>
                </View>

                {/* Amount Section */}
                <View className="items-center mb-8">
                    <Text className="text-gray-400 text-sm mb-2">Montant envoyé</Text>
                    <Text className="text-5xl font-bold text-black">$763.17</Text>
                    <Text className="text-gray-400 text-sm mt-1">≈ 299 USDT</Text>
                </View>

                {/* From/To Section */}
                <View className="bg-gray-50 rounded-2xl p-6 mb-6">
                    {/* From */}
                    <View className="mb-6">
                        <Text className="text-gray-500 text-sm mb-2">De</Text>
                        <View className="flex-row items-center">
                            <Image 
                                source={{ uri: 'https://i.pravatar.cc/100?img=11' }} 
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <View>
                                <Text className="font-bold">Smith Brinvil</Text>
                                <Text className="text-gray-400 text-xs">0x345...232</Text>
                            </View>
                        </View>
                    </View>

                    {/* Arrow */}
                    <View className="bg-white rounded-full w-8 h-8 items-center justify-center self-center mb-6 border border-gray-200">
                        <Ionicons name="arrow-down" size={16} color="black" />
                    </View>

                    {/* To */}
                    <View>
                        <Text className="text-gray-500 text-sm mb-2">Vers</Text>
                        <View className="flex-row items-center">
                            <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center mr-3">
                                <Ionicons name="wallet" size={18} color="blue" />
                            </View>
                            <View>
                                <Text className="font-bold">Alex Johnson</Text>
                                <Text className="text-gray-400 text-xs">0x567...890</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Details Section */}
                <View className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <Text className="font-bold text-base mb-4">Détails</Text>
                    
                    <View className="flex-row justify-between mb-4">
                        <Text className="text-gray-600">Montant</Text>
                        <Text className="font-semibold">$763.17</Text>
                    </View>
                    
                    <View className="flex-row justify-between mb-4">
                        <Text className="text-gray-600">Frais réseau</Text>
                        <Text className="font-semibold">$2.50</Text>
                    </View>

                    <View className="flex-row justify-between mb-4">
                        <Text className="text-gray-600">Taux de change</Text>
                        <Text className="font-semibold">1 USD = 0.000037 BTC</Text>
                    </View>

                    <View className="border-t border-gray-200 pt-4 flex-row justify-between">
                        <Text className="text-gray-600 font-semibold">Total</Text>
                        <Text className="font-bold text-base">$765.67</Text>
                    </View>
                </View>

                {/* Transaction Info */}
                <View className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <Text className="font-bold text-base mb-4">Informations</Text>
                    
                    <View className="mb-4">
                        <Text className="text-gray-500 text-xs mb-1">Hash de transaction</Text>
                        <Text className="text-gray-700 text-xs font-mono">0x3a4f2b1e9c8d7f6a5b4c3d2e1f0g9h8i7</Text>
                    </View>

                    <View className="mb-4">
                        <Text className="text-gray-500 text-xs mb-1">Date et heure</Text>
                        <Text className="text-gray-700 text-sm">23 novembre 2024 à 14:45</Text>
                    </View>

                    <View>
                        <Text className="text-gray-500 text-xs mb-1">Bloc</Text>
                        <Text className="text-gray-700 text-sm">18,450,123</Text>
                    </View>
                </View>

                {/* Action Buttons */}
                <View className="flex-row gap-3 mb-8">
                    <TouchableOpacity className="flex-1 bg-blue-500 py-4 rounded-xl items-center">
                        <Ionicons name="share-social" size={20} color="white" />
                        <Text className="text-white font-semibold mt-1">Partager</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-1 bg-gray-100 py-4 rounded-xl items-center">
                        <Ionicons name="copy" size={20} color="black" />
                        <Text className="text-black font-semibold mt-1">Copier</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
