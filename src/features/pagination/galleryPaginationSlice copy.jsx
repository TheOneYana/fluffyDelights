import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import cats from '../../cats';
const initialState = {
    isLoading: true,
    catItems: [],
    total: 0,
    imgs:cats,
    imgsPerPage: 8,
    currentPage: 1
    
}
const galleryPagination = createSlice({
    name: 'imgs',
    initialState,
    reducers:{
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

export const {onNavigateNext, onNavigatePrev,onChangeImgsPage,onCLickCurrentPage} = galleryPagination.actions;

export default galleryPagination.reducer;

/*
  imgs:cats,
    imgsPerPage: 8,
    currentPage: 1
    
    */