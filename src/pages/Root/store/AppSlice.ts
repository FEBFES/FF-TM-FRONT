import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IToast } from '../../../components/Toast/Toast.props';

type theme = 'dark' | 'light';

interface IAppSlice {
  toasts: IToast[];
  theme: theme;
  sidebarFullView: boolean;
}

const initialState: IAppSlice = {
  toasts: [],
  theme: (localStorage.getItem('theme') as theme)
    ? (localStorage.getItem('theme') as theme)
    : 'dark',
  sidebarFullView: true,
};

export const AppSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setSidebarView: (state, action) => {
      state.sidebarFullView = action.payload;
      document.documentElement.style.setProperty(
        '--sideBarWidth',
        action.payload ? '170px' : '60px'
      );
    },
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

export const { addToast, delToast, setSidebarView, changeAppTheme } =
  AppSlice.actions;
export default AppSlice.reducer;
