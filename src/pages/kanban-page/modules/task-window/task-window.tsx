import React, { useState } from 'react';
import { useTypedSelector } from '../../../../hooks/redux';
import i18n from 'i18next';
import { FilesTab, IFile } from '../../components';
import {
  STaskWindow,
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
