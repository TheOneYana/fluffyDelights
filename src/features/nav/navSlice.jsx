
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';



const initialState = {
    currentPage: null,
}

const contactSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        currentPageFunc: (state, action) => {
            state.currentPage = action.payload;
            console.log(state.currentPage);
        },
    }

});
export const {currentPageFunc} = contactSlice.actions;

export default contactSlice.reducer;