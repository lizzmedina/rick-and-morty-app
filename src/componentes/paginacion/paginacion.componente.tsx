import { useAppDispatch, useAppSelector } from '../../store/store';
import './paginacion.css';
import { GET_CHARACTERS } from '../../store/slices/characters/thunk.characters';

/**
 * 
 *  @component
 * @returns {JSX.Element}
 */
const Paginacion = () => {
    const { next,  prev} = useAppSelector((state) => state.characterAll);
    const dispatch = useAppDispatch();

    /**
     * Maneja el evento onClick para cargar la página siguiente de personajes.
     */
    const handlePaginationNext =() =>{        
        dispatch(GET_CHARACTERS(next));
    }
    
    /**
     * Maneja el evento onClick para cargar la página anterior de personajes.
     */
    const handlePaginationPrev =() =>{
        dispatch(GET_CHARACTERS(prev));
    }
    return (
        <div className="paginacion">
        <button  onClick={handlePaginationPrev} disabled={!prev} className={"primary"}>Anterior</button>
        <button onClick={handlePaginationNext} disabled={!next} className={"primary"}>Siguiente</button>
        </div>
    )    
}

export default Paginacion;