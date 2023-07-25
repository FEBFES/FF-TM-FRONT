import { createSlice } from '@reduxjs/toolkit';
import { isMobile } from 'react-device-detect';

type theme = 'dark' | 'light';

interface IAppSlice {
  theme: theme;
  sidebarFullView: boolean;
}

const initialState: IAppSlice = {
  theme: (localStorage.getItem('theme') as theme)
    ? (localStorage.getItem('theme') as theme)
    : 'dark',
  sidebarFullView: isMobile ? false : true,
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
    changeAppTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setSidebarView, changeAppTheme } = AppSlice.actions;
export default AppSlice.reducer;
