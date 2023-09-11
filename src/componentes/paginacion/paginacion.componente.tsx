import { useAppDispatch, useAppSelector } from '../../store/store';
import './paginacion.css';
import { GET_CHARACTERS } from '../../store/slices/thunk.characters';

/**
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const { next,  prev} = useAppSelector((state) => state.characterAll);
    const dispatch = useAppDispatch();

    const handlePaginationNext =() =>{
        dispatch(GET_CHARACTERS(next));
    }
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