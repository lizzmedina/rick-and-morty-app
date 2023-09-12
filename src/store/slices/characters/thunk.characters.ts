import { createAsyncThunk } from '@reduxjs/toolkit';
import { Character, Results } from '../../../interfaces.ts/Character.interface';

export const GET_CHARACTERS = createAsyncThunk('personajes/GET_CHARACTERS', async (urlPeticion: string | null ) : Promise<Results>=> {
    if (urlPeticion){
        const response = await fetch(urlPeticion);
        const data = await response.json();
        const results = {
            characterResults: data.results,
            next: data.info.next,
            prev: data.info.prev,
        }; 
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
export const GET_FILTRATE_CHARACTERS = createAsyncThunk('personajes/GET_FILTRATE_CHARACTERS', async (name: string): Promise<Results> => {

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        const data = await response.json();
        
        const filteredCharacters = data.results.filter((character: Character) =>
            character.name.toLowerCase().includes(name.toLowerCase())
        );

        const results = {
            characterResults: filteredCharacters,
            next: data.info.next,
            prev: data.info.prev,
        };
        return results;
    } catch (error) {
        throw new Error('No fue posible filtrar los personajes');
    }
});