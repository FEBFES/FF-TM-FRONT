import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchAddMemberToProject,
  fetchAddNewCol,
  fetchAddNewTask,
  fetchDelCol,
  fetchDeleteMemberFromProject,
  fetchDelTask,
  fetchGetProjectMembers,
  fetchGetTaskInfo,
  fetchProjectDashboard,
  fetchProjectInfo,
  fetchUpdateCol,
} from './kanban.thunk';
import { fetchFavoriteToggle } from '../../ProjectsPage/store/projects.thunk';
import { IColumns } from '../components/Column/Column.type';
import { ITask } from '../components/TaskCard/TaskCard.type';
import { IMember } from './kanban.type';

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
  members: IMember[];
  filters: { key: string; value: string }[];
  curView: 'row' | 'col';
}

const initialState: IKanbanInitialState = {
  columns: [],
  projectName: null,
  projectDesc: null,
  isLoading: false,
  errorMsg: null,
  projId: localStorage.getItem('curProj')
    ? Number(localStorage.getItem('curProj'))
    : null,
  taskWindowInfo: null,
  ownerId: null,
  isFavorite: false,
  members: [],
  filters: [],
  curView: 'col',
};

const KanbanSlice = createSlice({
  name: 'project/dashboard',
  initialState: initialState,
  reducers: {
    clearKanbanSlice: () => {
      return initialState;
    },
    setCurProjId: (state, action: PayloadAction<number>) => {
      state.projId = action.payload;
      localStorage.setItem('curProj', JSON.stringify(action.payload));
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
    setFilters: (state, action) => {
      const haveFilter =
        state.filters.filter((filter) => filter.key === action.payload.key)
          .length >= 1;

      if (!haveFilter) {
        state.filters.push(action.payload);
      } else {
        state.filters = state.filters.map((filter) => {
          if (filter.key === action.payload.key) {
            return {
              ...filter,
              value: action.payload.value,
            };
          }
          return filter;
        });
      }
    },
    //
    // Filters
    //
    delFilters: (state, action: PayloadAction<string>) => {
      state.filters = state.filters.filter(
        (filter) => filter.key !== action.payload
      );
    },
    clearAllFilters: (state) => {
      state.filters = [];
    },
    //
    // Change kanbanView
    //
    setCurView: (state, action) => {
      state.curView = action.payload;
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
    // Set project members
    builder.addCase(fetchGetProjectMembers.fulfilled, (state, action) => {
      state.members = action.payload;
    });
    // Add new member to project
    builder.addCase(fetchAddMemberToProject.fulfilled, (state, action) => {
      state.members.push(action.payload);
    });
    // Delete member from project
    builder.addCase(fetchDeleteMemberFromProject.fulfilled, (state, action) => {
      state.members = state.members.filter(
        (el: IMember) => el.id !== action.payload
      );
    });
  },
});

export const {
  setFilters,
  delFilters,
  setCurView,
  clearKanbanSlice,
  delTaskFromCol,
  addTaskToCol,
  clearAllFilters,
  setCurProjId,
} = KanbanSlice.actions;
export default KanbanSlice.reducer;
