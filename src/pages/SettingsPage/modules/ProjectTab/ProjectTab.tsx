import React, { useState } from 'react';
import styles from './ProjectTab.module.css';
import comStyles from '../../commonStyle.module.css';
import { useTypedSelector } from '../../../../hooks/redux';
import { ColumnCard } from '../../components/ColumnCard/ColumnCard';
import { IColumns } from '../../../KanbanPage/components/Column';
import { Button } from '../../../../ui/Button/Button';
import { AddColModal } from '../../components/AddColModal/AddColModal';
import { instance } from '../../../../api/http';

export const ProjectTab: React.FC = (): JSX.Element => {
  const projName = useTypedSelector((state) => state.projects?.curProj?.name);
  const columns = useTypedSelector((state) => state.projects?.curDashboard);
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [showAddColModal, setShowAddColModal] = useState<boolean>(false);

  //добавить uiComp confirm
  const deleteColumn = (projId: number, colId: number) => {
    //1. todo нужно подтверждение при удалении
    //2. todo нужно перенести в action
    instance.delete(`projects/${projId}/columns/${colId}`).then((res) => {
      //3. todo при успешном удалении удалять колунку из стейта
    });
  };

  return (
    <div>
      <h1 className={comStyles.title}>Project {projName || ''}</h1>

      <div className={styles.columnContainer}>
        <div className={styles.columnContainer__header}>
          <div>
            <h2 className={styles.title}>Columns</h2>
            <p className={styles.subtitle}>Edit the project columns</p>
          </div>

          <div>
            <Button theme={'primary'} onClick={() => setShowAddColModal(true)}>
              Add new
            </Button>
          </div>
        </div>

        {columns?.map((column: IColumns) => {
          return (
            <ColumnCard
              onDelete={deleteColumn}
              key={column.id}
              column={column}
            />
          );
        })}
      </div>

      {isChanged && (
        <div className={styles.columnContainer__footer}>
          <Button theme={'danger'}>Cancel</Button>
          <Button theme={'submit'}>Save</Button>
        </div>
      )}

      <AddColModal show={showAddColModal} setShow={setShowAddColModal} />
    </div>
  );
};
