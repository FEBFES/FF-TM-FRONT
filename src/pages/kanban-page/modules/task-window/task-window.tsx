import React, { useState } from 'react';
import { CloseIcon } from '../../../../assets/icons/UtilsIcons';
import { useTypedSelector } from '../../../../hooks/redux';
import i18n from 'i18next';
import { FilesTab, IFile } from '../../components';
import moment from 'moment';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { Typography, Flex, Tooltip, Space, Avatar } from 'antd';
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
        <Typography>#{task.id}</Typography>
        <Flex>
          {/*<FullIcon />*/}
          <SCloseIcon onClick={() => setShowWindow(false)}>
            <CloseIcon />
          </SCloseIcon>
        </Flex>
      </STaskWindowHeader>

      <STaskWindowSubHeader>
        <Typography>{task.name || ''}</Typography>
      </STaskWindowSubHeader>

      <SUsersSection>
        <Flex>
          <Typography>{i18n.t('utils.any.owner')}:</Typography>
          <Space />
          <Tooltip title={task.owner?.username || ''}>
            <Avatar src={getAvatarUrlOrHuman(task.owner?.userPic)} />
          </Tooltip>
        </Flex>
        <Flex>
          <Typography>{i18n.t('utils.any.assignee')}:</Typography>
          <Space />
          <Tooltip title={task?.assignee?.username || ''}>
            <Avatar
              src={getAvatarUrlOrHuman(task.assignee?.userPic)}
              alt={'human'}
            />
          </Tooltip>
        </Flex>
      </SUsersSection>

      <SPrioritySection>
        <Flex>
          <Typography>{i18n.t('utils.any.priority')}:</Typography>
          <Space />
          //todo
          {/*<PriorityLabel priority={task.priority} />*/}
        </Flex>

        <Flex>
          <Typography>{i18n.t('utils.any.type')}:</Typography>
          <Space />
          //todo
          {/*<TaskLabel type={task.type} />*/}
        </Flex>
      </SPrioritySection>

      <SDateContainer>
        <Typography>
          {i18n.t('pages.kanban.taskWindow.main.info.creationDate')}:
          <Space />
          {task.createDate ? moment(task.createDate).format('DD.MM.YYYY') : '-'}
        </Typography>

        <Typography>
          {i18n.t('pages.kanban.taskWindow.main.info.updateDate')}:
          <Space />
          {task.updateDate ? moment(task.updateDate).format('DD.MM.YYYY') : '-'}
        </Typography>
      </SDateContainer>

      <SDescriptionSection>
        <Typography>{i18n.t('utils.any.description')}</Typography>
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
