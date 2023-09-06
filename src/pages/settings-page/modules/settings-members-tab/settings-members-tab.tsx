import React, { useState } from 'react';
import { Title, Text, Button } from '../../../../ui';
import i18n from 'i18next';
import { IMember } from '../../../kanban-page/store/kanban.type';
import { MemberCard } from '../../components/member-card/member-card';
import { useTypedSelector } from '../../../../hooks/redux';
import { SMemberCont, SMemberContHeader } from './settings-members-tab.styled';
import { AddMemberToProjModal } from '../../../../components/add-member-to-proj-modal/add-member-to-proj-modal';

interface MembersTabProps {}

export const SettingsMembersTab: React.FC<
  MembersTabProps
> = (): JSX.Element => {
  const members = useTypedSelector((state) => state.curProj.members);
  const [showAddMemberModal, setShowAddMemberModal] = useState<boolean>(false);

  return (
    <div>
      <Title>{i18n.t('pages.settings.tabs.members.title')}</Title>
      <Text>{i18n.t('pages.settings.tabs.members.subtitle')}</Text>

      <SMemberCont>
        <SMemberContHeader>
          <Title level={'h6'}>
            {i18n.t('pages.settings.sidebar.link.members')}: {members.length}
          </Title>
          <Button onClick={() => setShowAddMemberModal(true)}>
            {i18n.t('utils.buttons.add')}
          </Button>
        </SMemberContHeader>
        {members.map((member: IMember, i: number) => {
          return <MemberCard member={member} key={i} />;
        })}
      </SMemberCont>

      <AddMemberToProjModal
        show={showAddMemberModal}
        setShow={setShowAddMemberModal}
      />
    </div>
  );
};
