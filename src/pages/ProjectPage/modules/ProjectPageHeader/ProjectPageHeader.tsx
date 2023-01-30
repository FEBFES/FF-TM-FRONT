import React, { useState } from 'react';
import './ProjectPageHeader.scss';
import { useTypedSelector } from '../../../../hooks/redux';
import { AddColModal } from '../../components/AddColModal/AddColModal';

export const ProjectPageHeader: React.FC = (): JSX.Element => {
  //todo переписать и убрать найм и деск из стора колонки - получать инфу из отдельного метода
  const { projectName, projectDesc } = useTypedSelector(
    (state) => state.projectColumns
  );
  const [showAddColModal, setShowAddColModal] = useState(false);

  return (
    <header>
      <div>
        <h1>{projectName}</h1>
        <h2>{projectDesc}</h2>
      </div>

      <button onClick={() => setShowAddColModal(true)}>Add new column</button>

      <AddColModal show={showAddColModal} setShow={setShowAddColModal} />
    </header>
  );
};
