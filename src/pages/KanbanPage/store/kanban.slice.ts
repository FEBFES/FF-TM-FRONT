import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddNewCol,
  fetchAddNewTask,
  fetchDelCol,
  fetchDelTask,
  fetchGetTaskInfo,
  fetchProjectDashboard,
  fetchProjectInfo,
  fetchUpdateCol,
} from './kanban.thunk';
import { fetchFavoriteToggle } from '../../ProjectsPage/store/projects.thunk';
import { IColumns } from '../components/Column/Column.type';
import { ITask } from '../components/TaskCard/TaskCard.type';

interface IKanbanInitialState {
  columns: IColumns[];
  taskWindowInfo: null | ITask;
  projectName: null | string;
  projectDesc: null | string;
  isLoading: boolean;
  errorMsg: string | null;
  projId: number | null;
  ownerId: number | null;
  isFavorite: boolean;
}

const initialState: IKanbanInitialState = {
  columns: [],
  projectName: null,
  projectDesc: null,
  isLoading: false,
  errorMsg: null,
  projId: null,
  taskWindowInfo: null,
  ownerId: null,
  isFavorite: false,
};

const KanbanSlice = createSlice({
  name: 'project/dashboard',
  initialState: initialState,
  reducers: {
    clearKanbanSlice: () => {
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
      const { name, description, id, isFavourite, ownerId } = action.payload;
      state.projectName = name;
      state.projectDesc = description;
      state.projId = id;
      state.ownerId = ownerId;
      state.isFavorite = isFavourite;
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
    // Favorite toggle
    //
    builder.addCase(fetchFavoriteToggle.fulfilled, (state, action) => {
      state.isFavorite = action.payload?.isFav || false;
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
    //
    // Update column
    //
    builder.addCase(fetchUpdateCol.fulfilled, (state, action) => {
      state.columns = state.columns.map((col) => {
        if (col.id === action.payload?.colId) {
          return {
            ...col,
            name: action.payload?.name,
          };
        }
        return col;
      });
    });
  },
});

export const { clearKanbanSlice, delTaskFromCol, addTaskToCol } =
  KanbanSlice.actions;
export default KanbanSlice.reducer;
