import React, { useState } from 'react';
import i18n from 'i18next';
import { IColumns } from '../../../kanban-page/components/column/column';
import { ColumnCard } from '../column-card/column-card';
import { AddColModal } from '../add-col-modal/add-col-modal';
import { fetchDelCol } from '../../../kanban-page/store/kanban.thunk';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { Space, Button, Title, Text, Confirm } from '../../../../ui';
import {
  SColumnContainer,
  SColumnContHeader,
  SColumnContFooter,
} from './columns-section.styled';

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
      <SColumnContainer>
        <SColumnContHeader>
          <div>
            <Title level={'h5'}>
              {i18n.t('pages.settings.tabs.project.column.subtitle')}
            </Title>
            <Text>{i18n.t('pages.settings.tabs.project.column.text')}</Text>
          </div>

          <Space direction="col" size={'s'} />

          <Button variant={'primary'} onClick={() => setShowAddColModal(true)}>
            {i18n.t('pages.settings.tabs.project.column.addNew')}
          </Button>
        </SColumnContHeader>

        {columns?.map((column: IColumns) => {
          return (
            <ColumnCard
              onDelete={deleteColumn}
              key={column.id}
              column={column}
            />
          );
        })}
      </SColumnContainer>

      {isChanged && (
        <SColumnContFooter>
          <Button variant={'danger'}>Cancel</Button>
          <Button variant={'submit'}>Save</Button>
        </SColumnContFooter>
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
