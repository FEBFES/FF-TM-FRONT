import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IToast } from '../../components/Toast/Toast';

interface IAppSlice {
  toasts: IToast[];
}

const initialState: IAppSlice = {
  toasts: [],
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
  },
});

export const { addToast, delToast } = AppSlice.actions;
export default AppSlice.reducer;
