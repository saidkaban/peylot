import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Item } from "../models/item";

interface Props {
  item: Item;
  navigation: any;
}

const AuctionItem = ({ item, navigation }: Props) => {
  return (
    <TouchableOpacity
      style={styles.auctionItem}
      onPress={() => navigation.navigate("ItemDetail")}
    >
      <Image
        style={{ flex: 1, height: 100, width: 100 }}
        source={{ uri: item.imageUrl }}
      />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default AuctionItem;

const styles = StyleSheet.create({
  auctionItem: {
    backgroundColor: "#ccc",
    alignItems: "center",
    height: 150,
    width: 150,
  },
});
