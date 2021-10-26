import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AuctionItem from "../components/AuctionItem";
import { ITEMS } from "../data/dummy-data";
import { Item } from "../models/item";

interface Props {
  navigation?: any;
  route?: any;
}

const CategoryItemsScreen = ({ navigation, route }: Props) => {
  const { categoryTitle, categoryId } = route.params;
  const selectedCategoryItems = ITEMS.filter((i) =>
    i.categoryIds.includes(categoryId)
  );

  const renderAuctionItem = (itemData: any) => {
    return <AuctionItem item={itemData.item} navigation={navigation} />;
  };

  return (
    <View style={styles.screen}>
      <Text>
        <FlatList
          data={selectedCategoryItems}
          renderItem={renderAuctionItem}
          numColumns={2}
        />
      </Text>
    </View>
  );
};

export default CategoryItemsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
});
