import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreen from "../screens/Favorites/FavoritesScreen";
import ItemDetailScreen from "../screens/Categories/ItemDetailScreen";
import { FavoritesStackParamList } from "../types";

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

const FavoritesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerTitle: "Favorites",
      }}
    >
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
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

export default FavoritesStack;
