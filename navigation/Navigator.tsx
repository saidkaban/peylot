import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import CategoryItemsScreen from "../screens/Categories/CategoryItemsScreen";
import ItemDetailScreen from "../screens/Categories/ItemDetailScreen";
import { RootStackParamList } from "../types";
import FavoritesScreen from "../screens/Favorites/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import HomeScreen from "../screens/Home/HomeScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CategoriesTab") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "FavoritesTab") {
            iconName = focused ? "ios-heart" : "ios-heart-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primaryColor,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name='CategoriesTab'
        component={CategoriesStack}
        options={{ headerShown: false, title: "Categories" }}
      />
      <Tab.Screen
        name='FavoritesTab'
        component={FavoritesScreen}
        options={{ title: "Favorites" }}
      />
    </Tab.Navigator>
  );
};

export const CategoriesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Categories'
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name='Categories' component={CategoriesScreen} />
      <Stack.Screen
        name='CategoryItems'
        component={CategoryItemsScreen}
        options={({ route }) => ({
          title: route.params.categoryTitle,
        })}
      />
      <Stack.Screen
        name='ItemDetail'
        component={ItemDetailScreen}
        options={({ route }) => ({
          headerTitle: route.params?.itemTitle,
        })}
      />
    </Stack.Navigator>
  );
};