import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import "../../global.css";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "black", // Noir quand actif
                tabBarInactiveTintColor: "#9CA3AF", // Gris (Gray-400) quand inactif
                tabBarStyle: {
                    height: 80, // Un peu plus haut pour l'élégance
                    padding: 20,
                    borderTopWidth: 0, // Enlève la ligne de bordure moche
                    elevation: 0, // Enlève l'ombre sur Android pour un look plat
                    backgroundColor: "white",
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "500",
                }
            }}
        >
            {/* 1. Accueil */}
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />

            {/* 2. Historique */}
            <Tabs.Screen
                name="history"
                options={{
                    title: "History",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "time" : "time-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />

            {/* 3. Cartes */}
            <Tabs.Screen
                name="cards"
                options={{
                    title: "Cards",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "card" : "card-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />

            {/* 4. Récompenses */}
            <Tabs.Screen
                name="rewards"
                options={{
                    title: "Rewards",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "gift" : "gift-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}