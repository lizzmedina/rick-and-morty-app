import './filtros.css';
import { useAppDispatch } from '../../store/store';
import { GET_FILTRATE_CHARACTERS } from '../../store/slices/characters/thunk.characters';
import { useEffect, useState } from 'react';

type FiltrosProps = {
    borrarFiltro: boolean;
    setBorrarFiltro: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {boolean} props.borrarFiltro - Indica si se debe borrar el filtro.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setBorrarFiltro - Función para actualizar el estado de borrarFiltro.
 * @returns {JSX.Element} El componente Filtros.
 */
const Filtros = ({ borrarFiltro, setBorrarFiltro }: FiltrosProps) => {

    const dispatch = useAppDispatch();
    const [filtro, setFiltro] = useState('');

 /**
   * @param {Event} e - El evento de cambio del campo de búsqueda.
   */
    const handlerSearch = (e: any) => {
        setFiltro(e.target.value);
        dispatch(GET_FILTRATE_CHARACTERS(e.target.value));
    }
    
    useEffect(() => {
        if (borrarFiltro) {
            setFiltro('');
            setBorrarFiltro(false);
        }
    }, [borrarFiltro, setBorrarFiltro]);


    return <div className="filtros">
        <label className="txtFilter">Filtrar por nombre:</label>
        <input  
            id= "inputFilter" 
            type="text" 
            onChange={handlerSearch}
            placeholder="Rick, Morty, Beth, Alien, ...etc" 
            name="nombre"  
            value={filtro}
        />
    </div>
}

export default Filtros;