import {configureStore} from '@reduxjs/toolkit';
import galleryReducer from './features/pagination/galleryPaginationSlice';
import contactReducer from './features/contact/contactSlice';

export const store = configureStore({
    reducer:{
        imgs: galleryReducer,
        contact: contactReducer,
        
    }
})