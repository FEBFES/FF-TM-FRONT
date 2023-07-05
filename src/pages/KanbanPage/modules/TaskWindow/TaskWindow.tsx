import React, { useEffect, useState } from 'react';
import styles from './TaskWindow.module.css';
import { CloseIcon, FullIcon } from '../../../../assets/icons/UtilsIcons';
import { useTypedSelector } from '../../../../hooks/redux';
import human from '../../../../assets/img/human.png';
import { PriorityHigh } from '../../../../assets/icons/TaskIcons';
import { instance } from '../../../../api/http';
import { downloadFile } from '../../../../utils/download';

interface TaskWindowProps {
  setShowWindow: (bool: boolean) => void;
}

export const TaskWindow: React.FC<TaskWindowProps> = ({
  setShowWindow,
}): JSX.Element | null => {
  const [curSubPage, setCurSubPage] = useState<'files'>('files');
  const [files, setFiles] = useState([]);
  const task = useTypedSelector((state) => state.projectKanban.taskWindowInfo);

  useEffect(() => {
    if (!task) {
      return;
    }
    instance
      .get(
        `projects/${task?.projectId}/columns/${task?.columnId}/tasks/${task?.id}`
      )
      .then((res) => {
        setFiles(res.data.files);
      });
  }, [task]);

  if (task === null) {
    return null;
  }

  const uploadNewFile = (e: any) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append('files', files);
    instance.post(`files/task/${task.id}`, formData);
  };

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
        <h1 className={styles.subheader__title}>{task.name || ''}</h1>
      </div>

      <div className={styles.users}>
        <div className={styles.user__block}>
          {/* // todo i18next */}
          <span className={styles.user__title}>Owner:</span>
          <img className={styles.user__avatar} src={human} alt={'human'} />
        </div>
        <div className={styles.user__block}>
          {/* // todo i18next */}
          <span className={styles.user__title}>Assignee:</span>
          <img className={styles.user__avatar} src={human} alt={'human'} />
        </div>
      </div>

      <div className={styles.priority}>
        <div className={styles.priority__container}>
          {/* // todo i18next */}
          <span className={styles.user__title}>Proirity:</span>
          <PriorityHigh />
        </div>

        <div className={styles.priority__container}>
          {/* // todo i18next */}
          <span className={styles.user__title}>Type:</span>
          {/*todo change to ui comp badge*/}
          <div className={styles.tag}>Feature</div>
        </div>
      </div>

      <div className={styles.date}></div>

      <div className={styles.description}>
        {/* // todo i18next */}
        <h3 className={styles.user__title}>Description:</h3>
        <p className={styles.description__text}>{task.description || ''}</p>
      </div>

      <div className={styles.windowToggle}>
        <div
          onClick={() => setCurSubPage('files')}
          className={`${styles.windowToggle__item}`}
        >
          {/* // todo i18next */}
          Files {task.filesCounter}
        </div>
      </div>

      {curSubPage === 'files' && (
        <div className={styles.filesUploadContainer}>
          <div className={styles.fileInput__container}>
            <label className={styles.fileInput_label} htmlFor="inputFIle">
              Upload new file
            </label>
            <input
              id={'inputFIle'}
              className={styles.fileInput}
              onChange={uploadNewFile}
              type={'file'}
            />
          </div>

          <ul className={styles.fileCont}>
            {
              // todo Interface for file
              files.map((file: any) => {
                return (
                  <li
                    onClick={() => downloadFile(file.fileUrn, file.name)}
                    className={styles.file}
                  >
                    {file.name}
                  </li>
                );
              })
            }
          </ul>
        </div>
      )}

      {/*{curSubPage === 'log' && <div></ >}*/}
    </div>
  );
};
