import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import CategoryItemsScreen from "../screens/Categories/CategoryItemsScreen";
import ItemDetailScreen from "../screens/Categories/ItemDetailScreen";
import { CategoriesStackParamList } from "../types";

const Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoriesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerBackTitle: "Geri",
        headerTitle: "Kategoriler",
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen
        name="CategoryItems"
        component={CategoryItemsScreen}
        options={({ route }) => ({
          title: route.params.categoryTitle,
        })}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetailScreen}
        options={({ route }) => ({
          headerTitle: route.params?.itemTitle,
        })}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStack;
