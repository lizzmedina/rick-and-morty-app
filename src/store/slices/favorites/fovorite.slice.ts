import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "../../../interfaces.ts/Character.interface";

export type CharacterAddState = {
  favorites: Character[];
};
export type CharacterDeleteFav = {
  idCard: number;
};
const initialState: CharacterAddState = {
  favorites: [],
};

export const favoriteCharactersSlice = createSlice({
  name: "favCharacters",
  initialState,
  reducers: {
    TOGGLE_FAVORITES: (state, action: PayloadAction<Character>) => {      
      const selectedCard = action.payload;
      const isFavorite = state.favorites.find(
        (fav) => fav.id === selectedCard.id
      );
      if (isFavorite) {
        isFavorite.isFavApi = false;
        state.favorites = state.favorites.filter(
          (item) => item.id !== isFavorite.id
        );
      } else {
        selectedCard.isFavApi = true;
        state.favorites.push(selectedCard);
      }      
    },
    DELETE_ALL : (state, action: PayloadAction<Character>) => {
      state.favorites = [];
    }
  },
});
const favoriteReducer = favoriteCharactersSlice.reducer;
export const { TOGGLE_FAVORITES, DELETE_ALL } = favoriteCharactersSlice.actions;
export default favoriteReducer;
