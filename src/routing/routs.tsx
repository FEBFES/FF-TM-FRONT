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

export enum appRoutsPath {
  ProjectPage = '/',
  KanbanPage = '/KanbanPage/',
}

const appRouts: IAppRouts[] = [
  {
    title: 'ProjectPage',
    component: ProjectPage,
    layout: MainLayout,
    path: appRoutsPath.ProjectPage,
  },
  {
    title: 'KanbanPage',
    component: KanbanPage,
    layout: MainLayout,
    path: appRoutsPath.KanbanPage,
  },
];

export { appRouts };
