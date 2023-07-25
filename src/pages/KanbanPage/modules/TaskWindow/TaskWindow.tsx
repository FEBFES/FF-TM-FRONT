import React, { useState } from 'react';
import styles from './TaskWindow.module.css';
import { CloseIcon } from '../../../../assets/icons/UtilsIcons';
import { useTypedSelector } from '../../../../hooks/redux';
import { TaskLabel } from '../../../../ui/TaskLabel/TaskLabel';
import { PriorityLabel } from '../../../../ui/PriorityLabel/PriorityLabel';
import i18n from 'i18next';
import { FilesTab } from '../../components/FilesTab/FilesTab';
import moment from 'moment';
import { Avatar } from '../../../../ui/Avatar/Avatar';
import { IFile } from '../../components/TaskCard/TaskCard.type';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { Tooltip } from '../../../../ui/Tooltip/Tooltip';
import { Title } from '../../../../ui/Typography';
import { Space } from '../../../../ui/Space/Space';

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
    <div className={styles.taskWindow}>
      <header className={styles.header}>
        <Title level={'h4'}>#{task.id}</Title>
        <div className={styles.header__right}>
          {/*<FullIcon />*/}
          <div
            className={styles.closeIcon}
            onClick={() => setShowWindow(false)}
          >
            <CloseIcon />
          </div>
        </div>
      </header>

      <div className={styles.subheader}>
        <Title level={'h3'}>{task.name || ''}</Title>
      </div>

      <div className={styles.users}>
        <div className={styles.user__block}>
          <Title level={'h6'}>{i18n.t('utils.any.owner')}:</Title>
          <Space mx={'xs'} />
          <Tooltip title={task.owner?.username || ''}>
            <Avatar
              bordered
              size={'m'}
              src={getAvatarUrlOrHuman(task.owner?.userPic)}
            />
          </Tooltip>
        </div>
        <div className={styles.user__block}>
          <Title level={'h6'}>{i18n.t('utils.any.assignee')}:</Title>
          <Space mx={'xs'} />
          <Tooltip title={task?.assignee?.username || ''}>
            <Avatar
              size={'m'}
              bordered
              src={getAvatarUrlOrHuman(task.assignee?.userPic)}
              alt={'human'}
            />
          </Tooltip>
        </div>
      </div>

      <div className={styles.priority}>
        <div className={styles.priority__container}>
          <Title level={'h6'}>{i18n.t('utils.any.priority')}:</Title>
          <Space mx={'xs'} />
          <PriorityLabel priority={task.priority} />
        </div>

        <div className={styles.priority__container}>
          <Title level={'h6'}>{i18n.t('utils.any.type')}:</Title>
          <Space mx={'xs'} />
          <TaskLabel type={task.type} />
        </div>
      </div>

      <div className={styles.date__container}>
        <Title level={'h6'}>
          {i18n.t('pages.kanban.taskWindow.main.info.creationDate')}:
          <Space mx={'2xs'} />
          {task.createDate ? moment(task.createDate).format('DD.MM.YYYY') : '-'}
        </Title>

        <Title level={'h6'}>
          {i18n.t('pages.kanban.taskWindow.main.info.updateDate')}:
          <Space mx={'2xs'} />
          {task.updateDate ? moment(task.updateDate).format('DD.MM.YYYY') : '-'}
        </Title>
      </div>

      <div className={styles.description}>
        <Title level={'h6'}>{i18n.t('utils.any.description')}</Title>
        <textarea
          className={`${styles.description__text} scrollbar`}
          value={task.description || ''}
          onChange={() => {}}
        />
      </div>

      <div className={styles.windowToggle}>
        <div
          onClick={() => setCurSubPage('files')}
          className={`${styles.windowToggle__item}`}
        >
          {i18n.t('pages.kanban.taskWindow.tabs.files.title')}{' '}
          {files?.length || ''}
        </div>
      </div>

      {curSubPage === 'files' && <FilesTab files={files} setFiles={setFiles} />}
    </div>
  );
};
