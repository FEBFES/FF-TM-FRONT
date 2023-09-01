import React from 'react';
import i18n from 'i18next';
import { useTypedSelector } from '../../../../hooks/redux';
import { Title } from '../../../../ui/typography';
import { Space } from '../../../../ui/space/space';
import { sidebarLinks } from './links';
import {
  SSidebar,
  SSidebarLinkSubCont,
  SSidebarLinkContainer,
  SSidebarLink,
} from './settings-sidebar.styled';

interface SettingsSidebarProps {}

export const SettingsSidebar: React.FC<
  SettingsSidebarProps
> = (): JSX.Element => {
  const curProj = useTypedSelector((state) => state.curProj.projId);

  return (
    <SSidebar>
      <Title level={'h2'}>{i18n.t('pages.settings.sidebar.title')}</Title>
      <Space direction={'col'} size={'xl'} />

      {sidebarLinks.map((link, i) => {
        if (link.needCurProjInfo && !curProj) return null;
        return (
          <SSidebarLinkContainer key={i}>
            <Title level={'h4'}>{i18n.t(link.title)}</Title>
            <SSidebarLinkSubCont>
              {link.children.map((subLink, index) => {
                if (link.needCurProjInfo && !curProj) return null;
                //todo add isActive const
                const isActive = true;
                return (
                  <SSidebarLink key={index} isActive={isActive} to={subLink.to}>
                    {i18n.t(subLink.subtitle)}
                  </SSidebarLink>
                );
              })}
            </SSidebarLinkSubCont>
          </SSidebarLinkContainer>
        );
      })}
    </SSidebar>
  );
};
