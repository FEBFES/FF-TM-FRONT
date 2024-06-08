import React from 'react';
import { MainLayout } from '../layouts/main/main-layout';
import { KanbanPage } from '../pages/kanban/kanban-page';
import { RegistrationPage, LoginPage } from '../pages/auth';
import { SettingsPage } from '../pages/settings/settings-page';
import { ProjectsPage } from '../pages/projects/projects-page';
import { TimelinePage } from '../pages/timeline/timeline-page';
import { MessagesPage } from '../pages/messages/messages-page';
import { AuthLayout } from '../layouts/auth/auth-layout';
import { NotFoundPage } from '../pages/not-fount-404/not-found-page';
import { EmptyLayout } from '../layouts/empty/empty-layout';

export type IAppRouts = {
  title: string;
  component: React.FC;
  layout: any;
  path: string;
};

export const appRoutsPath = {
  ProjectPage: {
    title: 'Project Page',
    path: '/Projects',
    to: '/Projects',
  },
  KanbanPage: {
    title: 'Kanban Page',
    path: '/Kanban',
    to: '/Kanban',
  },
  RegistrationPage: {
    title: 'registration page',
    path: '/Registration',
    to: '/Registration',
  },
  TimelinePage: {
    title: 'Timeline',
    path: '/Timeline',
    to: '/Timeline',
  },
  MessagesPage: {
    title: 'Messages',
    path: '/Messages',
    to: '/Messages',
  },
  LoginPage: {
    title: 'login Page',
    path: '/Login',
    to: '/Login',
  },
  SettingsPage: {
    title: 'Settings',
    path: '/Settings/*',
    to: 'Settings',
  },
  DefaultPage: {
    title: '/ProjectPage',
    path: '/',
    to: '/',
  },
  NotFoundPage: {
    title: '/NotFound',
    path: '*',
    to: '*',
  },
};

const appRouts: IAppRouts[] = [
  // Default page
  {
    title: appRoutsPath.DefaultPage.title,
    component: ProjectsPage,
    layout: MainLayout,
    path: appRoutsPath.DefaultPage.path,
  },
  // Projects page
  {
    title: appRoutsPath.ProjectPage.title,
    component: ProjectsPage,
    layout: MainLayout,
    path: appRoutsPath.ProjectPage.path,
  },
  // Kanban page
  {
    title: appRoutsPath.KanbanPage.title,
    component: KanbanPage,
    layout: MainLayout,
    path: appRoutsPath.KanbanPage.path,
  },
  // Settings page
  {
    title: appRoutsPath.SettingsPage.title,
    component: SettingsPage,
    layout: MainLayout,
    path: appRoutsPath.SettingsPage.path,
  },
  // Timeline page
  {
    title: appRoutsPath.TimelinePage.title,
    component: TimelinePage,
    layout: MainLayout,
    path: appRoutsPath.TimelinePage.path,
  },
  // Messages page
  {
    title: appRoutsPath.MessagesPage.title,
    component: MessagesPage,
    layout: MainLayout,
    path: appRoutsPath.MessagesPage.path,
  },
  // Login page
  {
    title: appRoutsPath.LoginPage.title,
    component: LoginPage,
    layout: AuthLayout,
    path: appRoutsPath.LoginPage.path,
  },
  // Registration page
  {
    title: appRoutsPath.RegistrationPage.title,
    component: RegistrationPage,
    layout: AuthLayout,
    path: appRoutsPath.RegistrationPage.path,
  },
  // Not found page
  {
    title: appRoutsPath.NotFoundPage.title,
    component: NotFoundPage,
    layout: EmptyLayout,
    path: appRoutsPath.NotFoundPage.path,
  },
];

export { appRouts };
