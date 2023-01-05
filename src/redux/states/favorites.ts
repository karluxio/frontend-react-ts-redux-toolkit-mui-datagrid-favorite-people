import { LocalStorageKeys, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Array<Person> = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(LocalStorageKeys.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageKeys.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorites: (state, action) => {
      setLocalStorage(LocalStorageKeys.FAVORITES, action.payload);
      return action.payload;
    },
  },
});

export const { addFavorites } = favoritesSlice.actions;
