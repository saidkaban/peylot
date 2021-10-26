import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface Props {
  navigation: any;
  itemData: any;
}

const CategoryGridItem = ({ navigation, itemData }: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("CategoryItems", {
          categoryTitle: itemData.item.title,
          categoryId: itemData.item.id
        })
      }
      style={{ ...styles.gridItem, backgroundColor: itemData.item.color }}
    >
      <View>
        <Text style={styles.gridTitle} numberOfLines={2}>
          {itemData.item.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryGridItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    height: 160,
    width: 160,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
  },
  gridTitle: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    textAlign: "right", 
  },
});
