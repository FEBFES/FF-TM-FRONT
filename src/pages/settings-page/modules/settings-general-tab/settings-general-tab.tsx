import React from 'react';
import { Typography } from 'antd';
import i18n from 'i18next';

interface GeneralTabProps {}

export const SettingsGeneralTab: React.FC<
  GeneralTabProps
> = (): JSX.Element => {
  return (
    <div>
      <Typography>{i18n.t('app.title')}</Typography>
      <Typography>{i18n.t('pages.settings.tabs.general.subtitle')}</Typography>

      <div>
        <Typography>Theme:</Typography>
        //todo
        {/*<Switcher isActive={true} onClick={() => {}} />*/}
      </div>
    </div>
  );
};
