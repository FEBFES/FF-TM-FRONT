import React from 'react';
import { IFile } from '../task-card/task-card.type';
import { downloadFile } from '../../../../utils/download';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../../../../ui/typography';
import { SFileCard, SDeleteButton } from './file-card.styled';

interface FileCardProps {
  file: IFile;
  deleteFile: (fileId: number) => void;
}

export const FileCard: React.FC<FileCardProps> = ({
  file,
  deleteFile,
}): JSX.Element => {
  return (
    <SFileCard>
      <Title
        level={'h6'}
        key={`${file.name}`}
        onClick={() => downloadFile(file.fileUrn, file.name)}
      >
        {file.name}
      </Title>
      <SDeleteButton onClick={() => deleteFile(file.id)}>
        <FontAwesomeIcon size={'2xs'} icon={faTrash} />
      </SDeleteButton>
    </SFileCard>
  );
};
