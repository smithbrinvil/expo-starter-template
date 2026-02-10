import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-white">
            {/* Header */}
            <View className="px-5 flex-row items-center justify-between mt-12 mb-6">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView className="px-5">
                {/* Profile Picture & Info */}
                <View className="items-center mb-8">
                    <Image 
                        source={{ uri: 'https://i.pravatar.cc/200?img=11' }} 
                        className="w-24 h-24 rounded-full mb-4"
                    />
                    <Text className="text-2xl font-bold">Smith Brinvil</Text>
                    <Text className="text-gray-500 text-sm mt-1">@smithbrinvil</Text>
                </View>

                {/* Stats Section */}
                <View className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <View className="flex-row justify-around">
                        <View className="items-center">
                            <Text className="text-2xl font-bold">$12,450</Text>
                            <Text className="text-gray-500 text-sm mt-1">Solde</Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-2xl font-bold">48</Text>
                            <Text className="text-gray-500 text-sm mt-1">Transferts</Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-2xl font-bold">★ 4.8</Text>
                            <Text className="text-gray-500 text-sm mt-1">Note</Text>
                        </View>
                    </View>
                </View>

                {/* Account Info */}
                <View className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <Text className="font-bold text-base mb-4">Informations du compte</Text>
                    
                    <View className="mb-4">
                        <Text className="text-gray-500 text-xs mb-1">Email</Text>
                        <Text className="text-gray-700 text-sm">smith.brinvil@email.com</Text>
                    </View>

                    <View className="mb-4">
                        <Text className="text-gray-500 text-xs mb-1">Adresse</Text>
                        <Text className="text-gray-700 text-sm">0x345...232</Text>
                    </View>

                    <View>
                        <Text className="text-gray-500 text-xs mb-1">Membre depuis</Text>
                        <Text className="text-gray-700 text-sm">15 janvier 2024</Text>
                    </View>
                </View>

                {/* Menu Items */}
                <View className="mb-6">
                    <TouchableOpacity className="bg-gray-50 rounded-2xl p-4 mb-3 flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Ionicons name="wallet" size={20} color="blue" />
                            <Text className="font-semibold ml-3">Portefeuille</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-gray-50 rounded-2xl p-4 mb-3 flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Ionicons name="shield-checkmark" size={20} color="green" />
                            <Text className="font-semibold ml-3">Sécurité</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-gray-50 rounded-2xl p-4 mb-3 flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Ionicons name="notifications" size={20} color="orange" />
                            <Text className="font-semibold ml-3">Notifications</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-gray-50 rounded-2xl p-4 flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Ionicons name="help-circle" size={20} color="purple" />
                            <Text className="font-semibold ml-3">Aide</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>
                </View>

                {/* Action Buttons */}
                <View className="flex-row gap-3 mb-8">
                    <TouchableOpacity className="flex-1 bg-blue-500 py-4 rounded-xl items-center">
                        <Text className="text-white font-semibold">Modifier le profil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-1 bg-red-500 py-4 rounded-xl items-center">
                        <Text className="text-white font-semibold">Déconnexion</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
