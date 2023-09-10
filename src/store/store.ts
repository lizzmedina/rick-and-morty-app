import {configureStore} from '@reduxjs/toolkit';
import characterReducer from './slices/characters.slice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const store = configureStore({
    reducer : {
        characterAll : characterReducer,
    }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch : DispatchFunc = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export default store;