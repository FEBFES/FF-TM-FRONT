import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRegistration } from './auth.thunk';

interface IAuthSliceInitialState {}

const initialState: IAuthSliceInitialState = {};

const AuthSlice = createSlice({
  name: 'project/auth',
  initialState: initialState,
  reducers: {
    clearAuthSlice: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchRegistration.fulfilled,
      (state, action: PayloadAction<string>) => {
        localStorage.setItem('token', JSON.stringify(action.payload));
      }
    );
  },
});

export const {} = AuthSlice.actions;
export default AuthSlice.reducer;
