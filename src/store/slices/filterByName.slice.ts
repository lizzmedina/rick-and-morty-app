import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character, Results } from "../../interfaces.ts/Character.interface";
import { GET_FILTRATE_CHARACTERS } from "./thunk.characters";

export type CharacterFilterState = {
  filtrados: Character[],
  isLoading: boolean,
  isError: string | null,
  prev: string | null,
  next : string  |null,
};
const initialState: CharacterFilterState = {
  filtrados: [],
  isLoading: true,
  isError : null,
  prev: '',
  next : '',
};

export const filterCharactersSlice = createSlice({
    name: "filterCharacters",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(GET_FILTRATE_CHARACTERS.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(GET_FILTRATE_CHARACTERS.fulfilled, (state, action: PayloadAction<Results>) => {
        const { characterResults, next, prev } = action.payload;
  
        // Asigna los resultados filtrados al estado filtrados
        state.filtrados = characterResults;
  
        state.next = next;
        state.prev = prev;
        state.isLoading = false;
      });
      builder.addCase(GET_FILTRATE_CHARACTERS.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message ?? "no fue posible filtrar los personajes";
      });
    },
  });
const filterReducer = filterCharactersSlice.reducer;
//export const {  } = favoriteCharactersSlice.actions;
export default filterReducer;
