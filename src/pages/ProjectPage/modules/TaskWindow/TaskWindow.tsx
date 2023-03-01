import React, { useState } from 'react';
import styles from './TaskWindow.module.css';
import {
  CloseIcon,
  FullIcon,
  SendIcon,
} from '../../../../assets/icons/UtilsIcons';
import { useTypedSelector } from '../../../../hooks/redux';
import human from '../../../../assets/img/human.png';
import {
  AttachmentsIcon,
  PriorityHigh,
} from '../../../../assets/icons/TaskIcons';
import { InputField } from '../../../../ui/InputField/InputField';

interface TaskWindowProps {
  setShowWindow: (bool: boolean) => void;
}

export const TaskWindow: React.FC<TaskWindowProps> = ({
  setShowWindow,
}): JSX.Element | null => {
  const [curSubPage, setCurSubPage] = useState<'comments' | 'files' | 'log'>(
    'comments'
  );
  const task = useTypedSelector(
    (state) => state.projectDashboard.taskWindowInfo
  );

  if (task === null) {
    return <div>asd</div>;
  }

  return (
    <div className={styles.taskWindow}>
      <header className={styles.header}>
        <h2 className={styles.taskWindow_id}>{task.id}</h2>
        <div className={styles.header__right}>
          <FullIcon />
          <div
            className={styles.closeIcon}
            onClick={() => setShowWindow(false)}
          >
            <CloseIcon />
          </div>
        </div>
      </header>

      <div className={styles.subheader}>
        <h1 className={styles.subheader__title}>
          {task.name}ASDlajsldjasldjlaksjdlajslkdjalskdjlaksjdlk
        </h1>
        <div className={styles.subheader__type}>Bug</div>
      </div>

      <div className={styles.users}>
        <div className={styles.user__block}>
          <span className={styles.user__title}>Owner:</span>
          <img className={styles.user__avatar} src={human} alt={'human'} />
        </div>
        <div className={styles.user__block}>
          <span className={styles.user__title}>Assignee:</span>
          <img className={styles.user__avatar} src={human} alt={'human'} />
        </div>
      </div>

      <div className={styles.priority}>
        <div className={styles.priority__cont}>
          <span className={styles.user__title}>Proirity:</span>
          <PriorityHigh />
        </div>

        <div className={styles.tag}>Feature</div>
      </div>

      <div className={styles.date}></div>

      <div className={styles.description}>
        <h3 className={styles.user__title}>Description:</h3>
        <p className={styles.description__text}>{task.description}</p>
      </div>

      <div className={styles.windowToggle}>
        <div
          onClick={() => setCurSubPage('comments')}
          className={`${styles.windowToggle__item} ${
            curSubPage === 'comments' && styles.windowToggle__item_active
          }`}
        >
          Comments 8
        </div>
        <div
          onClick={() => setCurSubPage('files')}
          className={`${styles.windowToggle__item} ${
            curSubPage === 'files' && styles.windowToggle__item_active
          }`}
        >
          Files
        </div>
        <div
          onClick={() => setCurSubPage('log')}
          className={`${styles.windowToggle__item} ${
            curSubPage === 'log' && styles.windowToggle__item_active
          }`}
        >
          Log
        </div>
      </div>
      {curSubPage === 'comments' && (
        <div className={styles.comments}>
          <div className={styles.commentsWrap}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => {
              return (
                <div
                  className={`${styles.commentCont} ${
                    el % 2 === 0 && styles.commentContAny
                  }`}
                >
                  <div className={styles.commentCont__item}>
                    <div className={styles.comment__header}>
                      <h3 className={styles.comment_owner}>Me</h3>
                      <span className={styles.comment_date}>Jan 1</span>
                    </div>
                    <p className={styles.comment_text}>I’ll try to fix that</p>
                  </div>
                  <img
                    className={styles.user__avatar}
                    src={human}
                    alt="avatar"
                  />
                </div>
              );
            })}
          </div>

          <footer className={styles.comments__footer}>
            <div className={styles.comments__footer_attachIconCont}>
              <AttachmentsIcon />
            </div>
            <InputField
              className={styles.comments__footer_input}
              value={''}
              placeholder={'Write a comment...'}
            />
            <div className={styles.comments__footer_sendIconCont}>
              <SendIcon />
            </div>
          </footer>
        </div>
      )}

      {curSubPage === 'files' && <div></div>}

      {curSubPage === 'log' && <div></div>}
    </div>
  );
};
