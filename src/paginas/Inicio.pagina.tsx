import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../store/store";
import { GET_CHARACTERS, GET_FILTRATE_CHARACTERS } from "../store/slices/characters/thunk.characters";
import { useState } from "react";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * @component
 * @returns {JSX.Element} 
 */

const PaginaInicio = () => {

    const {url} = useAppSelector(state => state.characterAll);
    const dispacth = useAppDispatch();

    const [borrarFiltro, setBorrarFiltro] = useState(false);

    /**
     * Maneja el evento para limpiar el filtro y recargar la lista de personajes.
     */
    const handlerDeleteAll = () => {
        dispacth(GET_FILTRATE_CHARACTERS(''));
        dispacth(GET_CHARACTERS(url));
        setBorrarFiltro(true); 
    }
    
        return (
            <div className="container">
                <div className="actions">
                    <h3>Catálogo de Personajes</h3>
                    <button className="danger" onClick={() =>handlerDeleteAll()}>Limpiar Filtro</button>
                </div>
                <Filtros  borrarFiltro={borrarFiltro} setBorrarFiltro={setBorrarFiltro}/>
                <Paginacion/>
                <GrillaPersonajes />
                <Paginacion />
            </div>
        )    
    }

export default PaginaInicio;