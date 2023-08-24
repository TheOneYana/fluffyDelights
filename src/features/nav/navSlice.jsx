
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import links from "../../utils/links";


const initialState = {
    currentPage: links[0],
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