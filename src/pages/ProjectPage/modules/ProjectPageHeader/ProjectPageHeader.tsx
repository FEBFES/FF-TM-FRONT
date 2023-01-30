import React from 'react';
import './ProjectPageHeader.scss';
import { useTypedSelector } from '../../../../hooks/redux';

export const ProjectPageHeader: React.FC = (): JSX.Element => {
  //todo переписать и убрать найм и деск из стора колонки - получать инфу из отдельного метода
  const { projectName, projectDesc } = useTypedSelector(
    (state) => state.projectColumns
  );

  return (
    <header>
      <div>
        <h1>{projectName}</h1>
        <h2>{projectDesc}</h2>
      </div>

      <button>Add new column</button>
    </header>
  );
};
