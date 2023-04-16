import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import cats from '../../cats';

const catsArr = [...cats];
const length = catsArr.length;

const initialState = {
    isLoading: true,
    catItems: [],
    total: 0,
}

const crudSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        fetchCats: (state) => {
            state.catItems = cats;
            state.total = cats.length;
            console.log(cats)
        },
        shooCats: (state, action) => {
            const itemId = action.payload;
            state.catItems = state.catItems.filter((cat)=> cat.id !== itemId);
            state.total = state.catItems.length;
            console.log(state.catItems.length)
        }
    }

});
export const {fetchCats, shooCats} = crudSlice.actions;

export default crudSlice.reducer;