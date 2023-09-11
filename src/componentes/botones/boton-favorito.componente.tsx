import "./boton-favorito.css";
import { useAppDispatch, useAppSelector} from "../../store/store";
import {  TOGGLE_FAVORITES } from "../../store/slices/fovorite.slice";
import { useEffect } from "react";
import { Character } from "../../interfaces.ts/Character.interface";

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 *
 * @returns un JSX element
 */

const BotonFavorito = ({ name, image, isFavApi, id } : Character) => {
  
  const {favorites}= useAppSelector( (state) => state.favCharactersAll );
  const dispatch = useAppDispatch();
  const isFavorite = favorites.find( (fav) => fav.id === id );
  const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png";

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
