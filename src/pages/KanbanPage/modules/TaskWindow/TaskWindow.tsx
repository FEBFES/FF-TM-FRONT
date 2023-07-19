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
        <h2 className={styles.taskWindow_id}>{task.id}</h2>
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
          <span className={styles.user__title}>
            {i18n.t('utils.any.owner')}:
          </span>
          <Avatar
            bordered
            size={'m'}
            src={getAvatarUrlOrHuman(task.owner?.userPic)}
          />
        </div>
        <div className={styles.user__block}>
          <span className={styles.user__title}>
            {i18n.t('utils.any.assignee')}:
          </span>
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
          <span className={styles.user__title}>
            {i18n.t('utils.any.priority')}:
          </span>
          <PriorityLabel priority={task.priority} />
        </div>

        <div className={styles.priority__container}>
          <span className={styles.user__title}>
            {i18n.t('utils.any.type')}:
          </span>
          <TaskLabel type={task.type} />
        </div>
      </div>

      <div className={styles.date__container}>
        <h3 className={styles.user__title}>
          {i18n.t('pages.kanban.taskWindow.main.info.creationDate')}:{' '}
          {task.createDate ? moment(task.createDate).format('DD.MM.YYYY') : '-'}
        </h3>

        <h3 className={styles.user__title}>
          {i18n.t('pages.kanban.taskWindow.main.info.updateDate')}:{' '}
          {task.updateDate ? moment(task.updateDate).format('DD.MM.YYYY') : '-'}
        </h3>
      </div>

      <div className={styles.description}>
        <h3 className={styles.user__title}>
          {i18n.t('utils.any.description')}:
        </h3>
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
