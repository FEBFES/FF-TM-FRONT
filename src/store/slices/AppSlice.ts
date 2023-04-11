import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IToast } from '../../components/Toast/Toast.props';

type theme = 'dark' | 'light';

interface IAppSlice {
  toasts: IToast[];
  theme: theme;
}

const initialState: IAppSlice = {
  toasts: [],
  theme: (localStorage.getItem('theme') as theme)
    ? (localStorage.getItem('theme') as theme)
    : 'light',
};

export const AppSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<IToast>) => {
      state.toasts.push(action.payload);
    },
    delToast: (state: IAppSlice, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter((el) => el.id !== action.payload);
    },
    changeAppTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { addToast, delToast, changeAppTheme } = AppSlice.actions;
export default AppSlice.reducer;
