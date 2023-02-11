import React, { useState } from 'react';
import './ProjectPageHeader.scss';
import { useTypedSelector } from '../../../../hooks/redux';
import { AddColModal } from '../../components/AddColModal/AddColModal';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../../../routing/routs';

export const ProjectPageHeader: React.FC = (): JSX.Element => {
  //todo переписать и убрать найм и деск из стора колонки - получать инфу из отдельного метода
  const { projectName, projectDesc } = useTypedSelector(
    (state) => state.projectColumns
  );
  const [showAddColModal, setShowAddColModal] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <div>
        <h1>{projectName || 'Project name'}</h1>
        <div className={'breadcrumbs'}>
          <h2 onClick={() => navigate(appRoutsPath.ProjectPage.path)}>
            Projects
          </h2>
          <p>/</p>
          <h2>{projectDesc || 'proj desc'}</h2>
        </div>
      </div>

      <div className={'header__right'}>
        <FontAwesomeIcon
          size={'lg'}
          icon={faEllipsisV}
          onClick={() => setShowAddColModal(true)}
        />
      </div>
      <AddColModal show={showAddColModal} setShow={setShowAddColModal} />
    </header>
  );
};
