import React from 'react';
import { MainPage } from '../pages/MainPage/MainPage';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { ProjectPage } from '../pages/ProjectPage/ProjectPage';
import { EmptyLayout } from '../layouts/EmptyLayout/EmptyLayout';
import { RegistrationPage } from '../pages/AuthPages/Registration/RegistrationPage';
import { LoginPage } from '../pages/AuthPages/Login/LoginPage';
import { Landing } from '../pages/Landing/Landing';

export type IAppRouts = {
  title: string;
  component: React.FC;
  layout: any;
  path: string;
};

export const appRoutsPath = {
  Landing: {
    title: 'FF-TM',
    path: '/',
    to: '/',
  },
  ProjectPage: {
    title: 'Project Page',
    path: '/Projects',
    to: '/Projects',
  },
  KanbanPage: {
    title: 'Kanban Page',
    path: '/KanbanPage/:id?',
    to: '/KanbanPage/',
  },
  RegistrationPage: {
    title: 'Registration page',
    path: '/Registration',
    to: '/Registration',
  },
  LoginPage: {
    title: 'Login Page',
    path: '/Login',
    to: '/Login',
  },
};

const privateRoutes: IAppRouts[] = [
  {
    title: appRoutsPath.ProjectPage.title,
    component: MainPage,
    layout: MainLayout,
    path: '/',
  },
  {
    title: appRoutsPath.ProjectPage.title,
    component: MainPage,
    layout: MainLayout,
    path: appRoutsPath.ProjectPage.path,
  },
  {
    title: appRoutsPath.KanbanPage.title,
    component: ProjectPage,
    layout: MainLayout,
    path: appRoutsPath.KanbanPage.path,
  },
];

const appRouts: IAppRouts[] = [
  {
    title: appRoutsPath.Landing.title,
    component: Landing,
    layout: EmptyLayout,
    path: appRoutsPath.Landing.path,
  },
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
