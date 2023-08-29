import React from 'react';
import { Title, Text } from '../../../../ui/Typography';
import i18n from 'i18next';
import { Switcher } from '../../../../ui/Switcher/Switcher';

interface GeneralTabProps {}

export const SettingsGeneralTab: React.FC<
  GeneralTabProps
> = (): JSX.Element => {
  return (
    <div>
      <Title>{i18n.t('app.title')}</Title>
      <Text>{i18n.t('pages.settings.tabs.general.subtitle')}</Text>

      <div>
        <Text>Theme:</Text>
        <Switcher isActive={true} onClick={() => {}} />
      </div>
    </div>
  );
};
