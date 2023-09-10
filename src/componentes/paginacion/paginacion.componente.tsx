import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import './paginacion.css';
import { GET_CHARACTERS } from '../../store/slices/thunk.characters';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const { next,  prev} = useAppSelector((state) => state.characterAll);
    const dispatch = useAppDispatch();

    const handlePaginationNext =() =>{
        dispatch(GET_CHARACTERS(next));
    }
    return <div className="paginacion">
        <button  disabled={!prev} className={"primary"}>Anterior</button>
        <button onClick={handlePaginationNext} disabled={!next} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;