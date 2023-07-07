import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchAddProject,
  fetchDelProject,
  fetchFavoriteToggle,
  fetchProjects,
} from './projects.thunk';
import { IProject } from './projects.type';
import { IColumns } from '../../KanbanPage/components/Column/Column.type';

interface IProjectInitialState {
  projects: IProject[];
  curProj: IProject | null;
  curDashboard: IColumns[] | null;
  isLoad: boolean;
  error: string | null;
}

const projectInitialState: IProjectInitialState = {
  projects: [],
  curProj: null,
  isLoad: false,
  error: null,
  curDashboard: null,
};

const ProjectsSlice = createSlice({
  name: 'projects',
  initialState: projectInitialState,
  reducers: {
    setCurProj: (state, action: PayloadAction<IProject>) => {
      state.curProj = action.payload;
    },
    setCurDashboard: (state, action: PayloadAction<IColumns[]>) => {
      state.curDashboard = action.payload.sort(
        (a: IColumns, b: IColumns) => a.columnOrder - b.columnOrder
      );
    },
  },
  extraReducers: (builder) => {
    //
    // Getting a list of user's projects
    //
    builder.addCase(fetchProjects.pending, (state, action) => {
      state.isLoad = true;
      state.error = null;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.isLoad = false;
    });
    //
    // Add new project
    //
    builder.addCase(fetchAddProject.fulfilled, (state, action) => {
      state.projects.push(action.payload);
    });
    //todo - add pending
    //
    // Delete projects
    //
    builder.addCase(fetchDelProject.fulfilled, (state, action) => {
      state.projects = state.projects.filter((el) => el.id !== action.payload);
    });
    //
    // Set project is favorite toggle
    //
    builder.addCase(fetchFavoriteToggle.fulfilled, (state, action) => {
      state.projects = state.projects.map((el: IProject) => {
        if (action?.payload?.projId === el.id) {
          return {
            ...el,
            isFavourite: action.payload.isFav,
          };
        }
        return el;
      });
    });

    //todo - add pending
    builder.addMatcher(
      (action: AnyAction) => {
        return action.type.endsWith('rejected');
      },
      (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoad = false;
      }
    );
  },
});

export const { setCurProj, setCurDashboard } = ProjectsSlice.actions;
export default ProjectsSlice.reducer;
