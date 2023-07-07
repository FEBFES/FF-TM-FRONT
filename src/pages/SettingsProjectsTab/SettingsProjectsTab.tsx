import React, { useState } from 'react';
import styles from './SettingsProjectsTab.module.css';
import comStyles from '../SettingsPage/commonStyle.module.css';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { Button } from '../../ui/Button/Button';
import { AddColModal } from './components/AddColModal/AddColModal';
import { ColumnCard } from './components/ColumnCard/ColumnCard';
import { IColumns } from '../KanbanPage/components/Column/Column.type';
import { fetchDelCol } from '../KanbanPage/store/kanban.thunk';
import i18n from 'i18next';
import { Confirm } from '../../ui/Confirm/Confirm';

export const SettingsProjectsTab: React.FC = (): JSX.Element => {
  const columns = useTypedSelector((state) => state.projectKanban.columns);
  const projName = useTypedSelector((state) => state.projectKanban.projectName);

  const [isChanged] = useState<boolean>(false);
  const [showAddColModal, setShowAddColModal] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  // todo need refactoring
  const [curCol, setCurCol] = useState<any>(null);
  const dispatch = useAppDispatch();

  const deleteColumn = (projId: number, colId: number) => {
    setCurCol({ projId, colId });
    setShowConfirmModal(true);
  };

  return (
    <div>
      <h1 className={comStyles.title}>
        {i18n.t('pages.settings.tabs.project.title')} {projName || ''}
      </h1>

      <div className={styles.columnContainer}>
        <div className={styles.columnContainer__header}>
          <div>
            <h2 className={styles.title}>
              {i18n.t('pages.settings.tabs.project.column.subtitle')}
            </h2>
            <p className={styles.subtitle}>
              {i18n.t('pages.settings.tabs.project.column.text')}
            </p>
          </div>

          <div>
            <Button theme={'primary'} onClick={() => setShowAddColModal(true)}>
              {i18n.t('pages.settings.tabs.project.column.addNew')}
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
      <Confirm
        show={showConfirmModal}
        setShow={setShowConfirmModal}
        title={i18n.t('pages.settings.tabs.project.column.confirm.delete')}
        onConfirm={() => dispatch(fetchDelCol(curCol))}
      />
    </div>
  );
};
