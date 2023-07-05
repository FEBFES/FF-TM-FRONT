import React from 'react';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { KanbanPage } from '../pages/KanbanPage/KanbanPage';
import { EmptyLayout } from '../layouts/EmptyLayout/EmptyLayout';
import { RegistrationPage } from '../pages/AuthPages/Registration/RegistrationPage';
import { LoginPage } from '../pages/AuthPages/Login/LoginPage';
import { SettingsPage } from '../pages/SettingsPage/SettingsPage';
import { ProjectsPage } from '../pages/ProjectsPage/ProjectsPage';
import { TimelinePage } from '../pages/TimelinePage/TimelinePage';
import { MessagesPage } from '../pages/MessagesPage/MessagesPage';
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout';

export type IAppRouts = {
  title: string;
  component: React.FC;
  layout: any;
  path: string;
};

export const appRoutsPath = {
  ProjectPage: {
    //todo i18next
    title: 'Project Page',
    path: '/',
    to: '/',
  },
  KanbanPage: {
    //todo i18next
    title: 'Kanban Page',
    path: '/KanbanPage/',
    to: '/KanbanPage/',
  },
  RegistrationPage: {
    //todo i18next
    title: 'Registration page',
    path: '/Registration',
    to: '/Registration',
  },
  TimelinePage: {
    //todo i18next
    title: 'Timeline',
    path: '/Timeline',
    to: '/Timeline',
  },
  MessagesPage: {
    //todo i18next
    title: 'Messages',
    path: '/Messages',
    to: '/Messages',
  },
  LoginPage: {
    //todo i18next
    title: 'Login Page',
    path: '/',
    to: '/',
  },
  SettingsPage: {
    //todo i18next
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
  {
    title: appRoutsPath.TimelinePage.title,
    component: TimelinePage,
    layout: MainLayout,
    path: appRoutsPath.TimelinePage.path,
  },
  {
    title: appRoutsPath.MessagesPage.title,
    component: MessagesPage,
    layout: MainLayout,
    path: appRoutsPath.MessagesPage.path,
  },
];

const appRouts: IAppRouts[] = [
  {
    title: appRoutsPath.LoginPage.title,
    component: LoginPage,
    layout: AuthLayout,
    path: appRoutsPath.LoginPage.path,
  },
  {
    title: appRoutsPath.RegistrationPage.title,
    component: RegistrationPage,
    layout: AuthLayout,
    path: appRoutsPath.RegistrationPage.path,
  },
];

export { appRouts, privateRoutes };
