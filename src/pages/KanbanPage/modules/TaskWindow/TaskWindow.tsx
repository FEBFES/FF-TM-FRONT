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
        <Title
        // todo
        // className={styles.taskWindow_id}
        >
          #{task.id}
        </Title>
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
        <h1 className={styles.subheader__title}>{task.name || ''}</h1>
      </div>

      <div className={styles.users}>
        <div className={styles.user__block}>
          <Title
          // className={styles.user__title}
          >
            {/*//todo*/}
            {i18n.t('utils.any.owner')}:
          </Title>
          <Tooltip title={task.owner?.username || ''}>
            <Avatar
              bordered
              size={'m'}
              src={getAvatarUrlOrHuman(task.owner?.userPic)}
            />
          </Tooltip>
        </div>
        <div className={styles.user__block}>
          <Title
          //todo
          // className={styles.user__title}
          >
            {i18n.t('utils.any.assignee')}:
          </Title>
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
          <Title
          //todo
          // /**/className={styles.user__title}
          >
            {i18n.t('utils.any.priority')}:
          </Title>
          <PriorityLabel priority={task.priority} />
        </div>

        <div className={styles.priority__container}>
          <Title
          //todo
          // className={styles.user__title}
          >
            {i18n.t('utils.any.type')}:
          </Title>
          <TaskLabel type={task.type} />
        </div>
      </div>

      <div className={styles.date__container}>
        <Title
        //todo
        // className={styles.user__title}
        >
          {i18n.t('pages.kanban.taskWindow.main.info.creationDate')}:{' '}
          {task.createDate ? moment(task.createDate).format('DD.MM.YYYY') : '-'}
        </Title>

        <Title
        //todo
        // className={styles.user__title}
        >
          {i18n.t('pages.kanban.taskWindow.main.info.updateDate')}:{' '}
          {task.updateDate ? moment(task.updateDate).format('DD.MM.YYYY') : '-'}
        </Title>
      </div>

      <div className={styles.description}>
        <Title
        //todo
        // className={styles.user__title}
        >
          {i18n.t('utils.any.description')}:
        </Title>
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
