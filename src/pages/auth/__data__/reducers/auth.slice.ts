import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchLogin } from "../thunk/auth.thunk";
// import { fetchLogin } from '../thunk/old/auth.thunk';

interface IAuthSliceInitialState {
  isAuth: boolean;
}

const initialState: IAuthSliceInitialState = {
  isAuth: !!localStorage.getItem("accessToken"),
};

const AuthSlice = createSlice({
  name: "project/auth",
  initialState: initialState,
  reducers: {
    clearAuthSlice: () => {
      return initialState;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      if (!action.payload) {
        localStorage.clear();
        window.location.pathname = "/";
      }
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      state.isAuth = true;
    });
  },
});

export const { setIsAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
