import React from 'react';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { KanbanPage } from '../pages/KanbanPage/KanbanPage';
import { EmptyLayout } from '../layouts/EmptyLayout/EmptyLayout';
import { RegistrationPage } from '../pages/AuthPages/Registration/RegistrationPage';
import { LoginPage } from '../pages/AuthPages/Login/LoginPage';
import { SettingsPage } from '../pages/SettingsPage/SettingsPage';
import { ProjectsPage } from '../pages/ProjectsPage/ProjectsPage';

export type IAppRouts = {
  title: string;
  component: React.FC;
  layout: any;
  path: string;
};

export const appRoutsPath = {
  ProjectPage: {
    title: 'Project Page',
    path: '/',
    to: '/',
  },
  KanbanPage: {
    title: 'Kanban Page',
    path: '/KanbanPageMain/',
    to: '/KanbanPageMain/',
  },
  RegistrationPage: {
    title: 'Registration page',
    path: '/Registration',
    to: '/Registration',
  },
  LoginPage: {
    title: 'Login Page',
    path: '/',
    to: '/',
  },
  SettingsPage: {
    title: 'Settings',
    path: '/SettingsPage/*',
    to: 'SettingsPage',
  },
};

const privateRoutes: IAppRouts[] = [
  {
    title: appRoutsPath.ProjectPage.title,
    component: ProjectsPage,
    layout: EmptyLayout,
    path: appRoutsPath.ProjectPage.path,
  },
  {
    title: appRoutsPath.KanbanPage.title,
    component: KanbanPage,
    layout: MainLayout,
    path: appRoutsPath.KanbanPage.path,
  },
  {
    title: appRoutsPath.SettingsPage.title,
    component: SettingsPage,
    layout: MainLayout,
    path: appRoutsPath.SettingsPage.path,
  },
];

const appRouts: IAppRouts[] = [
  {
    title: appRoutsPath.LoginPage.title,
    component: LoginPage,
    layout: EmptyLayout,
    path: appRoutsPath.LoginPage.path,
  },
  {
    title: appRoutsPath.RegistrationPage.title,
    component: RegistrationPage,
    layout: EmptyLayout,
    path: appRoutsPath.RegistrationPage.path,
  },
];

export { appRouts, privateRoutes };
