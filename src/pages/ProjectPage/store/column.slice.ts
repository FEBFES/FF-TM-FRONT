import { createSlice } from '@reduxjs/toolkit';
import { IProjectColumn } from './column.type';
import { fetchAllProjectColumns } from './column.thunk';

interface IColumnInitialState {
  columns: IProjectColumn[] | [];
}

const initialState: IColumnInitialState = {
  columns: [],
};

const ColumnSlice = createSlice({
  name: 'projects',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //
    // Get project columns
    //
    // todo add cese (reject, load)
    builder.addCase(fetchAllProjectColumns.fulfilled, (state, action) => {
      state.columns = action.payload;
    });
  },
});

export const {} = ColumnSlice.caseReducers;
export default ColumnSlice.reducer;
