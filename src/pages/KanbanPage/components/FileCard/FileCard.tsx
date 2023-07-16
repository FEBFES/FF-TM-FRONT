import React from 'react';
import styles from './FileCard.module.css';
import { IFile } from '../TaskCard/TaskCard.type';
import { downloadFile } from '../../../../utils/download';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface FileCardProps {
  file: IFile;
  deleteFile: (fileId: number) => void;
}

export const FileCard: React.FC<FileCardProps> = ({
  file,
  deleteFile,
}): JSX.Element => {
  return (
    <div className={styles.fileCard}>
      <span
        key={`${file.name}`}
        onClick={() => downloadFile(file.fileUrn, file.name)}
        className={styles.title}
      >
        {file.name}
      </span>
      <div className={styles.deleteBtn} onClick={() => deleteFile(file.id)}>
        <FontAwesomeIcon size={'2xs'} icon={faTrash} />
      </div>
    </div>
  );
};
