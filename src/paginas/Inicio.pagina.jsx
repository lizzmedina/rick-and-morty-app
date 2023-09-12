import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch } from "../store/store";
import { DELETE_ALL } from "../store/slices/characters/characters.slice";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */


const PaginaInicio = () => {
    const dispatch = useAppDispatch();

    const handlerDeleteAll =() =>{
        
    }
    return (
        <div className="container">
            <div className="actions">
                <h3>Catálogo de Personajes</h3>
                <button className="danger" onCanPlay={handlerDeleteAll}>Limpiar Filtro</button>
            </div>
            <Filtros />
            <Paginacion/>
            <GrillaPersonajes />
            <Paginacion />
        </div>
    )    
}

export default PaginaInicio;