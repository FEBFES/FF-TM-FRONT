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

export const SettingsProjectsTab: React.FC = (): JSX.Element => {
  const columns = useTypedSelector((state) => state.projectKanban.columns);
  const projName = useTypedSelector((state) => state.projectKanban.projectName);

  const [isChanged] = useState<boolean>(false);
  const [showAddColModal, setShowAddColModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  //добавить uiComp confirm
  const deleteColumn = (projId: number, colId: number) => {
    // //1. todo нужно подтверждение при удалении
    // //2. todo нужно перенести в action
    // instance.delete(`projects/${projId}/columns/${colId}`).then((res) => {
    //   //3. todo при успешном удалении удалять колунку из стейта
    // });
    dispatch(fetchDelCol({ projId, colId }));
  };

  return (
    <div>
      <h1 className={comStyles.title}>
        {i18n.t('pages.settings.tabs.profile.title')} {projName || ''}
      </h1>

      <div className={styles.columnContainer}>
        <div className={styles.columnContainer__header}>
          <div>
            <h2 className={styles.title}>
              {i18n.t('pages.settings.tabs.profile.column.subtitle')}
            </h2>
            <p className={styles.subtitle}>
              {i18n.t('pages.settings.tabs.profile.column.text')}
            </p>
          </div>

          <div>
            <Button theme={'primary'} onClick={() => setShowAddColModal(true)}>
              {i18n.t('pages.settings.tabs.profile.column.addNew')}
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
