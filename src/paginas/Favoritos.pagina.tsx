import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { DELETE_ALL } from "../store/slices/favorites/fovorite.slice";
import { useAppDispatch, useAppSelector } from "../store/store";
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * @component
 * @returns {JSX.Element} 
 */
const PaginaFavoritos = () => {

    let {favorites} = useAppSelector((state) => state.favCharactersAll);  
    const dispatch = useAppDispatch();
    
    /**
     * Maneja el evento de eliminar todos los personajes favoritos.
     */
    const handleDeleteAll = () => {
        dispatch(DELETE_ALL());
    }
    
    return (
        <div className="container">
            <div className="actions">
                <h3>Personajes Favoritos</h3>
                <button className="danger" onClick={handleDeleteAll}>Eliminar todos</button>
            </div>
            <div>     
                {
                    favorites.length > 0 
                        ? 
                            <GrillaPersonajes   filterFav = {true}/>
                        : 
                            <p>Aun no haz agregado ningun favorito</p>
                }       
            </div>
        </div>
    )    
}

export default PaginaFavoritos