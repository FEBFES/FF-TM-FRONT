import React from 'react';
import styles from './SettingsPage.module.css';
import { Routes, Route } from 'react-router-dom';
import { SettingsSidebar } from './modules/SettingsSidebar/SettingsSidebar';
import { ProfileTab } from './modules/ProfileTab/ProfileTab';

interface SettingsPageProps {}

export const SettingsPage: React.FC<SettingsPageProps> = (): JSX.Element => {
  // const userInfo = useTypedSelector((state) => state.user.userInfo);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (!userInfo) {
  //     dispatch(fetchGetUserInfo(1));
  //   }
  // }, [userInfo]);

  return (
    <div className={styles.page}>
      <SettingsSidebar />

      <div className={styles.page__cont}>
        <div className={styles.pageWrap}>
          <Routes>
            <Route path={'/'} element={<ProfileTab />} />
            {/*<Route path={'/'} element={<GeneralTab />} />*/}
            {/*<Route path={'/members'} element={<MembersTab />} />*/}
            {/*<Route path={'/profile'} element={<ProfileTab />} />*/}
          </Routes>
        </div>
      </div>
    </div>
  );
};
