import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppSlice {}

const initialState: IAppSlice = {};

export const AppSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {},
});

export const {} = AppSlice.actions;
export default AppSlice.reducer;
