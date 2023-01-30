import React from 'react';
import { MainPage } from '../pages/MainPage/MainPage';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { ProjectPage } from '../pages/ProjectPage/ProjectPage';

export type IAppRouts = {
  title: string;
  component: React.FC;
  layout: any;
  path: string;
};

export const appRoutsPath = {
  ProjectPage: {
    name: 'ProjectPage',
    path: '/',
  },
  KanbanPage: {
    name: 'KanbanPage',
    path: '/KanbanPage/?:id',
    to: '/KanbanPage/',
  },
};

const appRouts: IAppRouts[] = [
  {
    title: 'Project Page',
    component: MainPage,
    layout: MainLayout,
    path: appRoutsPath.ProjectPage.path,
  },
  {
    title: 'Kanban Page',
    component: ProjectPage,
    layout: MainLayout,
    path: '/KanbanPage/:id?',
  },
];

export { appRouts };
