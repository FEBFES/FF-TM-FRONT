import React, { useState } from 'react';
import styles from './ColumnsSection.module.css';
import i18n from 'i18next';
import { Button } from '../../../../ui/Button/Button';
import { IColumns } from '../../../KanbanPage/components/Column/Column.type';
import { ColumnCard } from '../ColumnCard/ColumnCard';
import { AddColModal } from '../AddColModal/AddColModal';
import { Confirm } from '../../../../ui/Confirm/Confirm';
import { fetchDelCol } from '../../../KanbanPage/store/kanban.thunk';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { Title, Text } from '../../../../ui/Typography';
import { Space } from '../../../../ui/Space/Space';

interface ColumnsSectionProps {}

export const ColumnsSection: React.FC<
  ColumnsSectionProps
> = (): JSX.Element => {
  const columns = useTypedSelector((state) => state.curProj.columns);

  const [isChanged] = useState<boolean>(false);
  const [showAddColModal, setShowAddColModal] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [curCol, setCurCol] = useState<any>(null);
  const dispatch = useAppDispatch();

  const deleteColumn = (projId: number, colId: number) => {
    setCurCol({ projId, colId });
    setShowConfirmModal(true);
  };
  return (
    <>
      <div className={styles.columnContainer}>
        <div className={styles.columnContainer__header}>
          <div>
            <Title level={'h5'}>
              {i18n.t('pages.settings.tabs.project.column.subtitle')}
            </Title>
            <Text>{i18n.t('pages.settings.tabs.project.column.text')}</Text>
          </div>
          <Space my={'s'} />

          <div>
            <Button
              variant={'primary'}
              onClick={() => setShowAddColModal(true)}
            >
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
          <Button variant={'danger'}>Cancel</Button>
          <Button variant={'submit'}>Save</Button>
        </div>
      )}

      <AddColModal show={showAddColModal} setShow={setShowAddColModal} />
      <Confirm
        show={showConfirmModal}
        setShow={setShowConfirmModal}
        title={i18n.t('pages.settings.tabs.project.column.confirm.delete')}
        onConfirm={() => dispatch(fetchDelCol(curCol))}
      />
    </>
  );
};