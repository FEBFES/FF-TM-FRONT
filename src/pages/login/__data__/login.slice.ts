import { createSlice } from '@reduxjs/toolkit';
import { fetchLoginThunk } from './login.thunk';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null
};

const LoginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchLoginThunk.fulfilled, (state) => {
        state.isAuthenticated = true
        state.isLoading = false
      })
      .addCase(fetchLoginThunk.rejected, (state) => {
        // state.error = action.payload
        state.isLoading = false
      })
  }
});

export default LoginSlice.reducer;