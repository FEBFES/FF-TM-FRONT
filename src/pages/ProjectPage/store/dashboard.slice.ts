import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddNewCol,
  fetchAddNewTask,
  fetchDelCol,
  fetchDelTask,
  fetchGetTaskInfo,
  fetchProjectDashboard,
  fetchProjectInfo,
} from './dashboard.thunk';
import { IColumns, ITask } from './dashboard.type';

interface IDashboardInitialState {
  columns: IColumns[];
  taskWindowInfo: null | ITask;
  projectName: null | string;
  projectDesc: null | string;
  isLoading: boolean;
  errorMsg: string | null;
  projId: number | null;
}

const initialState: IDashboardInitialState = {
  columns: [],
  projectName: null,
  projectDesc: null,
  isLoading: false,
  errorMsg: null,
  projId: null,
  taskWindowInfo: null,
};

const DashboardSlice = createSlice({
  name: 'project/dashboard',
  initialState: initialState,
  reducers: {
    clearDashboardSlice: () => {
      return initialState;
    },
    delTaskFromCol: (state, action) => {
      state.columns = state.columns.map((col: IColumns) => {
        if (col.id === action.payload.columnId) {
          return {
            ...col,
            tasks: col.tasks.filter((task) => task.id !== action.payload.id),
          };
        }
        return col;
      });
    },
    addTaskToCol: (state, action) => {
      state.columns = state.columns.map((col: IColumns) => {
        if (col.id === action.payload.colId) {
          return {
            ...col,
            tasks: [
              ...col.tasks,
              {
                ...action.payload.task,
                columnId: action.payload.colId,
              },
            ],
          };
        }
        return col;
      });
    },
  },
  extraReducers: (builder) => {
    //
    // Get Project info
    //
    builder.addCase(fetchProjectInfo.fulfilled, (state, action) => {
      const { name, description, id } = action.payload;

      state.projectName = name;
      state.projectDesc = description;
      state.projId = id;
    });
    //
    // Get project dashboard (columns)
    //
    builder.addCase(fetchProjectDashboard.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProjectDashboard.fulfilled, (state, action) => {
      state.isLoading = false;
      state.errorMsg = null;

      const { columns } = action.payload;
      state.columns = columns;
    });
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
    //
    // Del task by Id
    //
    builder.addCase(fetchDelTask.fulfilled, (state, action) => {
      state.columns = state.columns.map((col) => {
        if (col.id === action?.payload?.colId) {
          return {
            ...col,
            tasks: col.tasks.filter(
              (task) => task.id !== action.payload?.taskId
            ),
          };
        }
        return col;
      });
    });
    //
    // Add new column
    //
    builder.addCase(fetchAddNewCol.fulfilled, (state, action) => {
      state.columns.push(action.payload);
    });
    //
    // Delete column
    //
    builder.addCase(fetchDelCol.fulfilled, (state, action) => {
      state.columns = state.columns.filter((col) => col.id !== action.payload);
    });
    builder.addCase(fetchGetTaskInfo.fulfilled, (state, action) => {
      state.taskWindowInfo = action.payload;
    });
  },
});

export const { clearDashboardSlice, delTaskFromCol, addTaskToCol } =
  DashboardSlice.actions;
export default DashboardSlice.reducer;
