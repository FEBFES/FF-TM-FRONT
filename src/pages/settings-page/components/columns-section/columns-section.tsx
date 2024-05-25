import React, { useState } from 'react';
import { IColumns } from '../../../kanban-page/components/column/column';
import { ColumnCard } from '../column-card/column-card';
import { AddColModal } from '../add-col-modal/add-col-modal';
import { fetchDelCol } from '../../../kanban-page/store/kanban.thunk';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { Typography, Space, Button } from 'antd';
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
  const dispatch = useAppDispatch();

  const deleteColumn = (projId: number, colId: number) => {
    dispatch(fetchDelCol({ projId, colId }));
  };
  return (
    <>
      <SColumnContainer>
        <SColumnContHeader>
          <div>
            <Typography.Title>Колонки</Typography.Title>
            <Typography.Text>Редактируйте колонки проекта</Typography.Text>
          </div>

          <Space />

          <Button onClick={() => setShowAddColModal(true)} type={'primary'}>
            + Добавить новую колонку
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
          <Button>Cancel</Button>
          <Button>Save</Button>
        </SColumnContFooter>
      )}
      <AddColModal show={showAddColModal} setShow={setShowAddColModal} />
    </>
  );
};
