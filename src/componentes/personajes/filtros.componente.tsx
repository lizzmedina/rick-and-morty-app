import './filtros.css';
import { useAppDispatch } from '../../store/store';
import { GET_FILTRATE_CHARACTERS } from '../../store/slices/characters/thunk.characters';
import { useEffect } from 'react';

const Filtros = () => {

    const dispatch = useAppDispatch();
    
    const handlerSearch = (e: any) => {
        dispatch(GET_FILTRATE_CHARACTERS(e.target.value));
    }

    return <div className="filtros">
        <label className="txtFilter">Filtrar por nombre:</label>
        <input  
            id= "inputFilter" 
            type="text" 
            onChange={handlerSearch}
            placeholder="Rick, Morty, Beth, Alien, ...etc" 
            name="nombre"  
        />
    </div>
}

export default Filtros;