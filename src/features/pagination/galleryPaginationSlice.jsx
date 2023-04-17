import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import cats from '../../cats';
const initialState = {
    isLoading: true,
    total: 0,
    imgs:[],
    imgsPerPage: 0,
    currentPage: 0
    
}
const galleryPagination = createSlice({
    name: 'imgs',
    initialState,
    reducers:{
        fetchCats: (state) => {
            state.imgs = cats;
            state.total = cats.length;
            state.imgsPerPage = 8;
            state.currentPage = 1;
            
        },
        shooCats: (state, action) => {
            const itemId = action.payload;
            state.imgs = state.imgs.filter((cat)=> cat.id !== itemId);
            state.total = state.imgs.length;
    
        },
        onNavigateNext: (state)=>{
            state.currentPage++;
        },
        onNavigatePrev: (state)=>{
            state.currentPage--;
        },
        onChangeImgsPage: (state, action)=>{
        state.imgsPerPage = action.payload;
        },
        onCLickCurrentPage: (state, action)=>{
        state.currentPage = action.payload;
        } 
    }
});

export const {onNavigateNext, onNavigatePrev,onChangeImgsPage,onCLickCurrentPage, fetchCats, shooCats} = galleryPagination.actions;

export default galleryPagination.reducer;

/*
  imgs:cats,
    imgsPerPage: 8,
    currentPage: 1
    
    */