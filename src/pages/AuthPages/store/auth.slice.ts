import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchLogin, fetchRegistration } from './auth.thunk';

interface IAuthSliceInitialState {
  isAuth: boolean;
}

const initialState: IAuthSliceInitialState = {
  isAuth: !!localStorage.getItem('accessToken'),
};

const AuthSlice = createSlice({
  name: 'project/auth',
  initialState: initialState,
  reducers: {
    clearAuthSlice: () => {
      return initialState;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      if (!action.payload) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      }
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchRegistration.fulfilled,
      (state, action: PayloadAction<string>) => {
        localStorage.setItem('token', action.payload);
      }
    );
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
      state.isAuth = true;
    });
  },
});

export const { setIsAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
