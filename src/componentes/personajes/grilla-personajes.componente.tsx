import { useEffect, useState } from 'react';
import { GET_CHARACTERS } from '../../store/slices/thunk.characters';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { Character } from '../../interfaces.ts/Character.interface';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = ({ filterFav = false }: { filterFav?: boolean } = {}) => {
    let {characters, isLoading, isError, url} = useAppSelector((state) => state.characterAll);
    let {favorites} = useAppSelector((state) => state.favCharactersAll);  
    const dispatch = useAppDispatch();

    const getCharacters = () => {  
        dispatch(GET_CHARACTERS(url));        
    }
    useEffect(()=>{
        getCharacters()                
    },[url])
    
    const filteredCharacters = filterFav ? favorites : characters;

    return (
        <div className="grilla-personajes">
            {
                isLoading ? <p> Loanding ... </p> :
                filteredCharacters.map (char =>
                        <TarjetaPersonaje  
                            id={char.id}
                            name={ char.name } 
                            image={char.image}  
                            key={char.id} 
                            isFavApi={char.isFavApi  }
                        />
                    )
            }
            { isError && <p>{isError}</p>}
        </div>
    )    
} 
export default GrillaPersonajes;