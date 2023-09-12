import {configureStore} from '@reduxjs/toolkit';
import characterReducer from './slices/characters/characters.slice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import favoriteReducer from './slices/favorites/fovorite.slice';

export const store = configureStore({
    reducer : {
        characterAll : characterReducer,
        favCharactersAll: favoriteReducer,
    }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch : DispatchFunc = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export default store;