import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProjectDashboard } from './dashboard.thunk';
import { IColumns } from './dashboard.type';

interface IColumnInitialState {
  columns: IColumns[];
  projectName: null | string;
  projectDesc: null | string;
  isLoading: boolean;
  errorMsg: string | null;
}

const initialState: IColumnInitialState = {
  columns: [],
  projectName: null,
  projectDesc: null,
  isLoading: false,
  errorMsg: null,
};

const DashboardSlice = createSlice({
  name: 'project/dashboard',
  initialState: initialState,
  reducers: {
    clearDashboardSlice: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjectDashboard.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProjectDashboard.fulfilled, (state, action) => {
      state.isLoading = false;
      state.errorMsg = null;

      const { name, columns, description } = action.payload;

      state.columns = columns;
      state.projectName = name;
      state.projectDesc = description;
    });
    builder.addCase(
      fetchProjectDashboard.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.errorMsg = action?.payload?.message;
      }
    );
  },
});

export const { clearDashboardSlice } = DashboardSlice.actions;
export default DashboardSlice.reducer;
