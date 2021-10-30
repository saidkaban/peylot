import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Item } from "../models/item";
import { Dimensions } from "react-native";

interface Props {
  item: Item;
  navigation: any;
}

const AuctionItem = ({ item, navigation }: Props) => {
  return (
    <TouchableOpacity
      style={styles.auctionItem}
      onPress={() =>
        navigation.navigate("ItemDetail", {
          itemId: item.id,
          itemTitle: item.title,
        })
      }
    >
      <Image style={styles.itemImage} source={{ uri: item.imageUrl }} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>${item.currentPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuctionItem;

const styles = StyleSheet.create({
  auctionItem: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "stretch",
    marginBottom: 20,
    height: 150,
    width: Dimensions.get("window").width,
  },
  itemImage: {
    height: 150,
    width: 150,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    justifyContent: "space-around",
    paddingVertical: 35,
  },
  itemTitle: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
  },
});
