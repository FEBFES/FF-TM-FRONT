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

export enum appRoutsPath {
  ProjectPage = '/',
  KanbanPage = '/KanbanPage/',
}

const appRouts: IAppRouts[] = [
  {
    title: 'ProjectPage',
    component: MainPage,
    layout: MainLayout,
    path: appRoutsPath.ProjectPage,
  },
  {
    title: 'KanbanPage',
    component: ProjectPage,
    layout: MainLayout,
    path: appRoutsPath.KanbanPage,
  },
];

export { appRouts };
