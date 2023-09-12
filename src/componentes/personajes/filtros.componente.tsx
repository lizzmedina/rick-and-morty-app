import './filtros.css';
import { useAppDispatch } from '../../store/store';
import { GET_FILTRATE_CHARACTERS } from '../../store/slices/thunk.characters';

const Filtros = () => {

    const dispatch = useAppDispatch();
    
    const handlerSearch = (e: any) => {
        dispatch(GET_FILTRATE_CHARACTERS(e.target.value));
    }
    return <div className="filtros">
        <label >Filtrar por nombre:</label>
        <input type="text"  onChange={handlerSearch} placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre"  />
    </div>
}

export default Filtros;