import { createAsyncThunk } from '@reduxjs/toolkit';
import { Results } from '../../interfaces.ts/Character.interface';

export const GET_CHARACTERS = createAsyncThunk('personajes/GET_CHARACTERS', async (urlPeticion: string | null ) : Promise<Results>=> {
    if (urlPeticion){
        const response = await fetch(urlPeticion);
    const data = await response.json();
    const results = {
        characterResults: data.results,
        next: data.info.next,
        prev: data.info.prev,
    };
    console.log(data);    
    return results;
    }
    return new Promise<Results>((resolve, reject) => {
        const results = {
            characterResults: [],
            next: '',
            prev: '',
        };
        return results;
    })
});