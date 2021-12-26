import React, { useState, useLayoutEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { useAppSelector } from "../../store/hooks";
import { itemActions } from "../../store/itemsSlice";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  navigation: any;
  route: any;
}

const ItemDetailScreen = ({ route, navigation }: Props) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.items.items);

  const { itemId } = route.params;
  const selectedItem = items.find((item) => item.id === itemId);

  const isFavorite = useAppSelector(
    (state) =>
      state.items.favoriteItems.filter((el) => el.id === itemId).length > 0
  );

  const toggleIsFavorite = () => {
    if (isFavorite) {
      dispatch(itemActions.removeFromFavorites(itemId));
    } else {
      dispatch(itemActions.addToFavorites(itemId));
    }
  };

  let favIcon = (
    <TouchableOpacity onPress={toggleIsFavorite}>
      {isFavorite ? (
        <Ionicons name="heart-sharp" size={24} color="black" />
      ) : (
        <Ionicons name="heart-outline" size={24} color="black" />
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
