import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import cats from '../../cats';
const initialState = {
    isLoading: true,
    cats: cats,
    total: cats.length,
}

const crudSlice = createSlice({
    name: 'cat',
    initialState,

});

export default crudSlice.reducer;