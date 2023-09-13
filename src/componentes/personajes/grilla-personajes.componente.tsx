import { useEffect } from 'react';
import { GET_CHARACTERS} from '../../store/slices/characters/thunk.characters';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useAppDispatch, useAppSelector } from '../../store/store';

type GrillaPersonajesProps={
    filterFav? : boolean,
}
/**
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {boolean} [props.filterFav=false] - Indica si se deben mostrar solo los personajes favoritos.
 * @returns {JSX.Element} El componente de GrillaPersonajes.
 */
const GrillaPersonajes = ({ filterFav = false }: GrillaPersonajesProps) => {

    const { characters, isLoading, isError, url } = useAppSelector((state) => state.characterAll);
    const { favorites } = useAppSelector((state) => state.favCharactersAll);
    const dispatch = useAppDispatch();  
  
    useEffect(() => {
      dispatch(GET_CHARACTERS(url));
    }, [url]);
    
    const filteredCharacters = filterFav  ? favorites : characters;

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