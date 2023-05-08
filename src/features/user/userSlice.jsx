import {createSlice, createAsyncThunk }from '@reduxjs/toolkit';


const initialState = {
    isLoading: false,
    userName: null,
};


const userSlice = createSlice({
    name: 'userName',
    initialState,
});

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userName, thunkAPI) => {
        console.log(`register user : ${userName}`);
    }
);
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userName, thunkAPI) => {
        console.log(`login user : ${userName}`);
    }
)

export default userSlice.reducer;
