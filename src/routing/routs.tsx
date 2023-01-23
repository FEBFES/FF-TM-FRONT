import React from 'react';
import { ProjectPage } from '../pages/ProjectPage/ProjectPage';
import { KanbanPage } from '../pages/KanbanPage/KanbanPage';
import { MainLayout } from '../layouts/MainLayout/MainLayout';

export type IAppRouts = {
  title: string;
  component: React.FC;
  layout: any;
  path: string;
};

const appRouts: IAppRouts[] = [
  {
    title: 'Project Page',
    component: ProjectPage,
    layout: MainLayout,
    path: '/',
  },
  {
    title: 'KanbanPage',
    component: KanbanPage,
    layout: MainLayout,
    path: '/KanbanPage',
  },
];

export { appRouts };
