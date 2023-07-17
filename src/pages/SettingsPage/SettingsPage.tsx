import React, { useEffect } from 'react';
import styles from './SettingsPage.module.css';
import { Routes, Route } from 'react-router-dom';
import { SettingsSidebar } from './components/SettingsSidebar/SettingsSidebar';
import { SettingsProfileTab } from '../SettingsProfileTab/SettingsProfileTab';
import { SettingsProjectsTab } from '../SettingsProjectsTab/SettingsProjectsTab';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { fetchGetUserInfo } from '../../store/User/user.thunk';
import { fetchProjectDashboard } from '../KanbanPage/store/kanban.thunk';

interface SettingsPageProps {}

export const SettingsPage: React.FC<SettingsPageProps> = (): JSX.Element => {
  const userId = useTypedSelector((state) => state.user.userId);
  const dispatch = useAppDispatch();
  const curProjId =
    useTypedSelector((state) => state.projects.curProj)?.id ||
    Number(localStorage.getItem('curProj'));

  useEffect(() => {
    if (!userId) {
      dispatch(fetchGetUserInfo(userId));
    }
    dispatch(
      fetchProjectDashboard({
        projId: curProjId,
        params: null,
      })
    );
  }, [dispatch, userId, curProjId]);

  return (
    <div className={styles.page}>
      <SettingsSidebar />

      <div className={styles.page__cont}>
        <div className={styles.pageWrap}>
          <Routes>
            <Route path={'/'} element={<SettingsProfileTab />} />
            <Route path={'/project'} element={<SettingsProjectsTab />} />
            {/*<Route path={'/'} element={<SettingsGeneralTab />} />*/}
            {/*<Route path={'/members'} element={<SettingsMembersTab />} />*/}
            {/*<Route path={'/profile'} element={<SettingsProfileTab />} />*/}
          </Routes>
        </div>
      </div>
    </div>
  );
};
