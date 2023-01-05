import { LocalStorageKeys, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Array<Person> = [];

export const peopleSlice = createSlice({
  name: "people",
  initialState: getLocalStorage(LocalStorageKeys.PEOPLE)
    ? JSON.parse(getLocalStorage(LocalStorageKeys.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(LocalStorageKeys.PEOPLE, state);
      return action.payload;
    },
  },
});

export const { addPeople } = peopleSlice.actions;
