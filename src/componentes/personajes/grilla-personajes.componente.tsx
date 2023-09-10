import { useEffect } from 'react';
import { GET_CHARACTERS } from '../../store/slices/thunk.characters';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useAppDispatch, useAppSelector } from '../../store/store';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {
    const {characters, isLoading, isError, url} = useAppSelector((state) => state.characterAll);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(GET_CHARACTERS(url));
    },[])

    return (
        <div className="grilla-personajes">
            {
                isLoading ? <p> Loanding ... </p> :
                    characters.map (char =>
                        <TarjetaPersonaje  name={ char.name } image={char.image}  key={char.id} favorite={false}/>
                    )
            }
            { isError && <p>{isError}</p>}
        </div>
    )    
} 
export default GrillaPersonajes;