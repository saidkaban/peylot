import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type CategoriesStackParamList = {
  Categories: undefined;
  CategoryItems: { categoryTitle: string; categoryId: string };
  ItemDetail: { itemId: string; itemTitle: string };
};

export type FavoritesStackParamList = {
  Favorites: undefined;
  ItemDetail: { itemId: string; itemTitle: string };
};
