import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';



const initialState = {
    name: null,
    email: null,
    message: null,
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        submitMessage: (state,action) => {
            state.name = action.payload;
            state.email = action.payload;
            state.message = action.payload;
            console.log(state.name);
        },
        // shooCats: (state, action) => {
        //     const itemId = action.payload;
        //     state.catItems = state.catItems.filter((cat)=> cat.id !== itemId);
        //     state.total = state.catItems.length;
        //     console.log(state.catItems.length)
        // }
    }

});
export const {submitMessage} = contactSlice.actions;

export default contactSlice.reducer;