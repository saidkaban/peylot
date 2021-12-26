import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import Item from "../models/item";
import { ITEMS } from "../data/dummy-data";
import { WritableDraft } from "immer/dist/internal";

interface itemsState {
  items: Item[];
  favoriteItems: Item[];
}

const initialState: itemsState = {
  items: ITEMS,
  favoriteItems: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      const itemToAdd = state.items.find(
        (el) => el.id === action.payload
      ) as WritableDraft<Item>;
      state.favoriteItems.push(itemToAdd);
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favoriteItems = state.favoriteItems.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const itemActions = itemsSlice.actions;

export default itemsSlice.reducer;
