import React, { useEffect } from 'react';
import styles from '../../modules/TaskWindow/TaskWindow.module.css';
import i18n from 'i18next';
import { IFile } from '../TaskCard/TaskCard.type';
import { instance } from '../../../../api/http';
import { useTypedSelector } from '../../../../hooks/redux';
import { FileCard } from '../file-card/file-card';

interface FilesTabProps {
  files: IFile[] | [];
  setFiles: (files: IFile[]) => void;
}

export const FilesTab: React.FC<FilesTabProps> = ({
  files,
  setFiles,
}): JSX.Element => {
  const task = useTypedSelector((state) => state.curProj.taskWindowInfo);

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
  }, [task, setFiles]);

  const uploadNewFile = (e: any) => {
    const photo = e.target.files[0];
    const formData = new FormData();
    formData.append('files', photo);
    instance.post(`files/task/${task?.id}`, formData).then((res) => {
      const newArr = [res.data[0], ...files];
      setFiles(newArr);
    });
  };

  const deleteFile = (fileId: number) => {
    instance.delete(`files/${fileId}`).then((res) => {
      const newArr = files.filter((file: IFile) => file.id !== fileId);
      setFiles(newArr);
    });
  };

  return (
    <div className={styles.filesUploadContainer}>
      <div className={styles.fileInput__container}>
        <label className={styles.fileInput_label} htmlFor="inputFIle">
          {i18n.t('pages.kanban.taskWindow.tabs.files.uploadText')}
        </label>
        <input
          id={'inputFIle'}
          className={styles.fileInput}
          onChange={uploadNewFile}
          type={'file'}
        />
      </div>

      <ul className={`${styles.fileCont} scrollbar`}>
        {files.map((file: IFile) => {
          return (
            <FileCard
              key={`${file.name}${file.id}`}
              file={file}
              deleteFile={deleteFile}
            />
          );
        })}
      </ul>
    </div>
  );
};
