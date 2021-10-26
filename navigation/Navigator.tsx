import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryItemsScreen from "../screens/CategoryItemsScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Categories'
      screenOptions={{
        headerStyle: { backgroundColor: "papayawhip" },
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
      <Stack.Screen name='ItemDetail' component={ItemDetailScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
