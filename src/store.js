import {configureStore} from '@reduxjs/toolkit';
import crudReducer from './features/crud/crudSlice';
import galleryReducer from './features/pagination/galleryPaginationSlice'


export const store = configureStore({
    reducer:{
        cats: crudReducer,
        imgs: galleryReducer,
        
    }
})