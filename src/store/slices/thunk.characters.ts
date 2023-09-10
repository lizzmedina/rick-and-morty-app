import { createAsyncThunk } from '@reduxjs/toolkit';
import { Results } from '../../interfaces.ts/Character.interface';

export const GET_CHARACTERS = createAsyncThunk('personajes/GET_CHARACTERS', async (url: string ) : Promise<Results>=> {
    const response = await fetch(url);
    const data = await response.json();
    const results = {
        characterResults: data.results,
        next: data.info.next,
        prev: data.info.prev,
    };
    console.log(data);    
    return results;
});