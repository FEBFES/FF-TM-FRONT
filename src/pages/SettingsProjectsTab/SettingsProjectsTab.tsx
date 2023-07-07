import React, { useState } from 'react';
import styles from './SettingsProjectsTab.module.css';
import comStyles from '../SettingsPage/commonStyle.module.css';
import { useTypedSelector } from '../../hooks/redux';
import { instance } from '../../api/http';
import { Button } from '../../ui/Button/Button';
import { IColumns } from '../KanbanPage/components/Column';
import { AddColModal } from './components/AddColModal/AddColModal';
import { ColumnCard } from './components/ColumnCard/ColumnCard';

export const SettingsProjectsTab: React.FC = (): JSX.Element => {
  const projName = useTypedSelector((state) => state.projects?.curProj?.name);
  const columns = useTypedSelector((state) => state.projects?.curDashboard);
  const [isChanged] = useState<boolean>(false);
  const [showAddColModal, setShowAddColModal] = useState<boolean>(false);

  //добавить uiComp confirm
  const deleteColumn = (projId: number, colId: number) => {
    //1. todo нужно подтверждение при удалении
    //2. todo нужно перенести в action
    instance.delete(`projects/${projId}/colum12ns/${colId}`).then((res) => {
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
