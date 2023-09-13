import "./boton-favorito.css";
import { useAppDispatch, useAppSelector} from "../../store/store";
import {  TOGGLE_FAVORITES } from "../../store/slices/favorites/fovorite.slice";
import { useEffect } from "react";
import { Character } from "../../interfaces.ts/Character.interface";

/**
 *Componente para agregar o quitar personajes de la lista de favoritos.
 *
 * @component
 * @param {Character} props - Las propiedades del componente.
 * @param {string} props.name - El nombre del personaje.
 * @param {string} props.image - La URL de la imagen del personaje.
 * @param {boolean} props.isFavApi - Indica si el personaje es marcado como favorito a través de una API.
 * @param {string} props.id - El identificador único del personaje.
 * @returns {JSX.Element} El componente BotonFavorito.
 */

const BotonFavorito = ({ name, image, isFavApi, id } : Character) => {
  
  const {favorites}= useAppSelector( (state) => state.favCharactersAll );
  const dispatch = useAppDispatch();
  const isFavorite = favorites.find( (fav) => fav.id === id );
  const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png";

/**
   * Maneja el evento onClick para agregar o quitar el personaje de favoritos.
   */
  const AddFavorites = () => {
    dispatch(TOGGLE_FAVORITES({ name, image, isFavApi, id }));
  }
  useEffect(() => {
  }, [src])
  
  return (
    <div className="boton-favorito">
      <img src={src} alt={"favorito"}  onClick={AddFavorites}/>
    </div>
  );
};

export default BotonFavorito;
