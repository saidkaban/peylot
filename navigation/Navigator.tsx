import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import CategoriesStack from "./CategoriesStack";
import FavoritesStack from "./FavoritesStack";

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "CategoriesTab") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "FavoritesTab") {
            iconName = focused ? "ios-heart" : "ios-heart-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primaryColor,
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="CategoriesTab"
        component={CategoriesStack}
        options={{ headerShown: false, title: "Kategoriler" }}
      />

      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesStack}
        options={{ title: "Favorilerim" }}
      />
    </Tab.Navigator>
  );
};
