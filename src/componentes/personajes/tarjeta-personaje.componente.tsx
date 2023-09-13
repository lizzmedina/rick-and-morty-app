import { Character } from '../../interfaces.ts/Character.interface';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * @component
 * 
 * @returns {JSX.Element}
 */
const TarjetaPersonaje = ({name, image, isFavApi, id} : Character) => {
    
    return <div className="tarjeta-personaje">
        <img src={image} alt={name}/>
        <div className="tarjeta-personaje-body">
            <span>{name}</span>
            <BotonFavorito id={id}  name = {name} image={image} isFavApi={isFavApi}  />
        </div>
    </div>
}

export default TarjetaPersonaje;