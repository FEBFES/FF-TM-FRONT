import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginThunk } from '../thunk/login';
import { appRoutsPath } from '../../../../routing/route-list';

interface IAuthSliceInitialState {
  isAuth: boolean;
}

const initialState: IAuthSliceInitialState = {
  isAuth: false,
};

const AuthSlice = createSlice({
  name: 'user/auth',
  initialState: initialState,
  reducers: {
    clearAuthSlice: () => {
      return initialState;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      if (!action.payload) {
        localStorage.clear();
        window.location.pathname = '/';
      }
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      if (action.payload) {
        localStorage.setItem('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        window.location.pathname = appRoutsPath.ProjectPage.to;
        state.isAuth = true;
      }
    });
  },
});

export const { setIsAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
