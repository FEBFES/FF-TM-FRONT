import React from 'react';
import { MainLayout } from '../layouts/main-layout/main-layout';
import { KanbanPage } from '../pages/kanban-page/kanban-page';
import { EmptyLayout } from '../layouts/empty-layout/empty-layout';
import { RegistrationPage } from '../pages/auth-pages/registration/registration-page';
import { LoginPage } from '../pages/auth-pages/login/login-page';
import { SettingsPage } from '../pages/settings-page/settings-page';
import { ProjectsPage } from '../pages/projects-page/projects-page';
import { TimelinePage } from '../pages/timeline-page/timeline-page';
import { MessagesPage } from '../pages/messages-page/messages-page';
import { AuthLayout } from '../layouts/auth-layout/auth-layout';

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
    path: '/ProjectsPage/',
    to: '/ProjectsPage/',
  },
  KanbanPage: {
    //todo i18next
    title: 'Kanban Page',
    path: '/KanbanPage/',
    to: '/KanbanPage/',
  },
  RegistrationPage: {
    //todo i18next
    title: 'registration page',
    path: '/registration',
    to: '/registration',
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
    title: 'login Page',
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
    layout: MainLayout,
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
