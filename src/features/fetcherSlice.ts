import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

export const fetcherSlice = createSlice({
    name: 'fetcher',
    initialState: {
        userName: 0,
    },
    reducers: {
        save: (state, action) => {
            state.userName = action.payload;
        },
    },
    extraReducers: {},
})

export default fetcherSlice.reducer;