import {configureStore} from '@reduxjs/toolkit';
import galleryReducer from './features/pagination/galleryPaginationSlice';
import navReducer from './features/nav/navSlice';

export const store = configureStore({
    reducer:{
        imgs: galleryReducer,
        nav: navReducer,
        
    }
})