export const sidebarLinks = [
  {
    title: 'pages.settings.tabs.general.sidebar.link',
    needCurProjInfo: false,
    children: [
      {
        subtitle: 'pages.settings.sidebar.link.general',
        to: '/SettingsPage/',
        needCurProjInfo: false,
      },
    ],
  },
  {
    title: 'pages.settings.sidebar.link.title',
    needCurProjInfo: false,
    children: [
      {
        subtitle: 'pages.settings.sidebar.link.profile',
        to: '/SettingsPage/profile',
        needCurProjInfo: false,
      },
    ],
  },
  {
    title: 'pages.settings.tabs.project.title',
    needCurProjInfo: false,
    children: [
      {
        subtitle: 'pages.settings.sidebar.link.project',
        to: '/SettingsPage/project',
        needCurProjInfo: true,
      },
      {
        subtitle: 'pages.settings.sidebar.link.members',
        to: '/SettingsPage/members',
        needCurProjInfo: true,
      },
    ],
  },
];
