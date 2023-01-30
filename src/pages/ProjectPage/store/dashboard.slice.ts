import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAddNewTask, fetchProjectDashboard } from './dashboard.thunk';
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
    //
    // Get project dashboard (columns)
    //
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
    //
    // Add new task
    //
    builder.addCase(fetchAddNewTask.fulfilled, (state, action) => {
      state.columns = state.columns.map((col) => {
        if (col.id === action.payload.columnId) {
          return {
            ...col,
            tasks: [...col.tasks, action.payload],
          };
        }
        return col;
      });
    });
  },
});

export const { clearDashboardSlice } = DashboardSlice.actions;
export default DashboardSlice.reducer;
