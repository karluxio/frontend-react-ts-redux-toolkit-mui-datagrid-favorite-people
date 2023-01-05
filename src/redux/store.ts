import { Person } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice, peopleSlice } from "./states";

export interface PersonStore {
  people: Array<Person>;
  favorites: Array<Person>;
}

export const store = configureStore<PersonStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
