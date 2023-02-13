import React from 'react';
import { MainPage } from '../pages/MainPage/MainPage';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { ProjectPage } from '../pages/ProjectPage/ProjectPage';
import { RegistrationPage } from '../pages/AuthPages/RegistrationPage';
import { EmptyLayout } from '../layouts/EmptyLayout/EmptyLayout';

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
    path: '/KanbanPage/:id?',
    to: '/KanbanPage/',
  },
  RegistrationPage: {
    name: 'Registration',
    path: '/Registration',
    to: '/Registration',
  },
};

const appRouts: IAppRouts[] = [
  {
    title: 'Registration page',
    component: RegistrationPage,
    layout: EmptyLayout,
    path: appRoutsPath.RegistrationPage.path,
  },
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
    path: appRoutsPath.KanbanPage.path,
  },
];

export { appRouts };
