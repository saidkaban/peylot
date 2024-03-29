import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CategoriesStackParamList } from "../../types";
import CategoryGridItem from "../../components/CategoryGridItem";
import { CATEGORIES } from "../../data/dummy-data";

type Props = NativeStackScreenProps<CategoriesStackParamList, "Categories">;

const CategoriesScreen = ({ navigation }: Props) => {
  const renderGridItem = (itemData: any) => {
    return <CategoryGridItem itemData={itemData} navigation={navigation} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList numColumns={1} data={CATEGORIES} renderItem={renderGridItem} />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    paddingVertical: 20,
    alignItems: "center",
  },
});
