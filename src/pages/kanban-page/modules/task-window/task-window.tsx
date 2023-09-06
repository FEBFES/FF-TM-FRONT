import React, { useState } from 'react';
import { CloseIcon } from '../../../../assets/icons/UtilsIcons';
import { useTypedSelector } from '../../../../hooks/redux';
import i18n from 'i18next';
import { FilesTab, IFile } from '../../components';
import moment from 'moment';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import {
  Title,
  Space,
  Tooltip,
  Avatar,
  PriorityLabel,
  TaskLabel,
  Flex,
} from '../../../../ui';
import {
  STaskWindowHeader,
  STaskWindow,
  STaskWindowSubHeader,
  SCloseIcon,
  SUsersSection,
  SPrioritySection,
  SDescriptionSection,
  SDescriptionText,
  SDateContainer,
  SWindowToggleItem,
  SWindowToggle,
} from './task-window.styled';

interface TaskWindowProps {
  setShowWindow: (bool: boolean) => void;
}

export const TaskWindow: React.FC<TaskWindowProps> = ({
  setShowWindow,
}): JSX.Element | null => {
  const [curSubPage, setCurSubPage] = useState<'files'>('files');
  const task = useTypedSelector((state) => state.curProj.taskWindowInfo);
  const [files, setFiles] = useState<IFile[] | []>([]);

  if (task === null) {
    return null;
  }

  return (
    <STaskWindow>
      <STaskWindowHeader>
        <Title level={'h4'}>#{task.id}</Title>
        <Flex ai={'center'}>
          {/*<FullIcon />*/}
          <SCloseIcon onClick={() => setShowWindow(false)}>
            <CloseIcon />
          </SCloseIcon>
        </Flex>
      </STaskWindowHeader>

      <STaskWindowSubHeader>
        <Title level={'h3'}>{task.name || ''}</Title>
      </STaskWindowSubHeader>

      <SUsersSection>
        <Flex ai={'center'}>
          <Title level={'h6'}>{i18n.t('utils.any.owner')}:</Title>
          <Space size={'xs'} />
          <Tooltip title={task.owner?.username || ''}>
            <Avatar
              bordered
              size={'m'}
              src={getAvatarUrlOrHuman(task.owner?.userPic)}
            />
          </Tooltip>
        </Flex>
        <Flex ai={'center'}>
          <Title level={'h6'}>{i18n.t('utils.any.assignee')}:</Title>
          <Space size={'xs'} />
          <Tooltip title={task?.assignee?.username || ''}>
            <Avatar
              size={'m'}
              bordered
              src={getAvatarUrlOrHuman(task.assignee?.userPic)}
              alt={'human'}
            />
          </Tooltip>
        </Flex>
      </SUsersSection>

      <SPrioritySection>
        <Flex ai={'center'}>
          <Title level={'h6'}>{i18n.t('utils.any.priority')}:</Title>
          <Space size={'xs'} />
          <PriorityLabel priority={task.priority} />
        </Flex>

        <Flex ai={'center'}>
          <Title level={'h6'}>{i18n.t('utils.any.type')}:</Title>
          <Space size={'xs'} />
          <TaskLabel type={task.type} />
        </Flex>
      </SPrioritySection>

      <SDateContainer>
        <Title level={'h6'}>
          {i18n.t('pages.kanban.taskWindow.main.info.creationDate')}:
          <Space size={'2xs'} />
          {task.createDate ? moment(task.createDate).format('DD.MM.YYYY') : '-'}
        </Title>

        <Title level={'h6'}>
          {i18n.t('pages.kanban.taskWindow.main.info.updateDate')}:
          <Space size={'2xs'} />
          {task.updateDate ? moment(task.updateDate).format('DD.MM.YYYY') : '-'}
        </Title>
      </SDateContainer>

      <SDescriptionSection>
        <Title level={'h6'}>{i18n.t('utils.any.description')}</Title>
        <SDescriptionText
          className={'scrollbar'}
          value={task.description || ''}
          onChange={() => {}}
        />
      </SDescriptionSection>

      <SWindowToggle>
        <SWindowToggleItem onClick={() => setCurSubPage('files')}>
          {i18n.t('pages.kanban.taskWindow.tabs.files.title')}{' '}
          {files?.length || ''}
        </SWindowToggleItem>
      </SWindowToggle>

      {curSubPage === 'files' && <FilesTab files={files} setFiles={setFiles} />}
    </STaskWindow>
  );
};
