import React, { useState, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { ITEMS } from "../../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  navigation: any;
  route: any;
}

const ItemDetailScreen = ({ route, navigation }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { itemId } = route.params;
  const selectedItem = ITEMS.find((item) => item.id === itemId);

  let favIcon = (
    <TouchableOpacity onPress={() => setIsFavorite((prev) => !prev)}>
      {isFavorite ? (
        <Ionicons name='heart-sharp' size={24} color='black' />
      ) : (
        <Ionicons name='heart-outline' size={24} color='black' />
      )}
    </TouchableOpacity>
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => favIcon,
    });
  }, [isFavorite]);

  return (
    <View>
      <Image
        source={{ uri: selectedItem?.imageUrl }}
        style={styles.itemImage}
      />
      <Text>{itemId}</Text>
    </View>
  );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
  itemImage: {
    width: Dimensions.get("window").width,
    height: 250,
  },
});
