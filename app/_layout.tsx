import { Slot } from 'expo-router';
import { View } from 'react-native';
import '../global.css'; // Import your NativeWind styles

export default function RootLayout() {
  return (
    <View className="flex-1 bg-white">
      <Slot />
    </View>
  );
}