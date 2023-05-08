import {configureStore} from '@reduxjs/toolkit';
import galleryReducer from './features/pagination/galleryPaginationSlice';
import navReducer from './features/nav/navSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
    reducer:{
        imgs: galleryReducer,
        nav: navReducer,
        user: userReducer,
        
    }
})