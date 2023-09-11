import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { Character, Results } from '../../interfaces.ts/Character.interface';
import { GET_CHARACTERS } from './thunk.characters';

type CharacterState = {    
    url : string,  
    characters: Character[],
    isLoading: boolean,
    isError: string | null,
    prev: string | null,
    next : string  |null,
    favorite : boolean
}
const initialState : CharacterState = {
    url : 'https://rickandmortyapi.com/api/character',
    characters: [],
    isLoading: true,
    isError : null,
    prev: '',
    next : '',
    favorite : false
}

export const charactersSlice = createSlice({
    name: 'character', 
    initialState ,
    reducers : {       
    },
    extraReducers : (builder) => {        
        builder.addCase(GET_CHARACTERS.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(GET_CHARACTERS.fulfilled, (state, action : PayloadAction<Results>) => {
            state.characters= action.payload.characterResults;
            state.next= action.payload.next;
            state.prev= action.payload.prev;
            state.isLoading = false;            
        })       
        builder.addCase(GET_CHARACTERS.rejected, ( state, action ) =>{
            state.isLoading = false;                        
            state.isError = action.error.message ??  'no fue posible ejecutar la llamada a la API los personajes';
        })        
    }
});
const characterReducer = charactersSlice.reducer;
//export const {} = charactersSlice.actions;
export default characterReducer ;