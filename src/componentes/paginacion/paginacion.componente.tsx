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
    const {characters, isLoading, isError, next, prev, url} = useAppSelector((state) => state.characterAll);
    const dispatch = useAppDispatch();

    // const handlePaginationNext = (urlNext : string | null ) => {  
    //    url  
    // }

    return <div className="paginacion">
        <button disabled={true} className={"primary"}>Anterior</button>
        <button  disabled={false} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;