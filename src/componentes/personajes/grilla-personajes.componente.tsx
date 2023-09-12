import { useEffect } from 'react';
import { GET_CHARACTERS, GET_FILTRATE_CHARACTERS } from '../../store/slices/thunk.characters';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useAppDispatch, useAppSelector } from '../../store/store';

type GrillaPersonajesProps={
    filterFav? : boolean,
}
/**
 * Grilla de personajes para la pagina de inicio
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = ({ filterFav = false }: GrillaPersonajesProps) => {

    const { characters, isLoading, isError, url } = useAppSelector((state) => state.characterAll);
    const { favorites } = useAppSelector((state) => state.favCharactersAll);
    const dispatch = useAppDispatch();
  
    const {filtrados} = useAppSelector((state) => state.filterCharactersAll);
  
    useEffect(() => {
      dispatch(GET_CHARACTERS(url));
    }, [url]);
  
    
    const filteredCharacters = filterFav ? favorites : (filtrados || characters);
    return (
      <div className="grilla-personajes">
        {isLoading ? <p> Loading ... </p> :
          filteredCharacters.map(char =>
            <TarjetaPersonaje
              id={char.id}
              name={char.name}
              image={char.image}
              key={char.id}
              isFavApi={char.isFavApi}
            />
          )
        }
        {isError && <p>{isError}</p>}
      </div>
    )
  }
  export default GrillaPersonajes;