import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchLogin, fetchRegistration } from './auth.thunk';

interface IAuthSliceInitialState {
  isAuth: boolean;
}

const initialState: IAuthSliceInitialState = {
  isAuth: false,
};

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
    builder.addCase(
      fetchLogin.fulfilled,
      (state, action: PayloadAction<string>) => {
        localStorage.setItem('token', JSON.stringify(action.payload));
        state.isAuth = true;
      }
    );
  },
});

export const {} = AuthSlice.actions;
export default AuthSlice.reducer;
