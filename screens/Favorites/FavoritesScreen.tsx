import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { useAppSelector } from "../../store/hooks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FavoritesStackParamList } from "../../types";
import AuctionItem from "../../components/AuctionItem";

type Props = NativeStackScreenProps<FavoritesStackParamList, "Favorites">;

const FavoritesScreen = ({ navigation }: Props) => {
  const favoriteItems = useAppSelector((state) => state.items.favoriteItems);

  const renderAuctionItem = (itemData: any) => {
    return <AuctionItem item={itemData.item} navigation={navigation} />;
  };

  return (
    <View style={styles.screen}>
      <Text>
        <FlatList
          data={favoriteItems}
          renderItem={renderAuctionItem}
          numColumns={1}
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    paddingVertical: 20,
    alignItems: "center",
  },
});

export default FavoritesScreen;
