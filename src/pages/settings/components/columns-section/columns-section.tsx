import React, { useState } from 'react';
import { IColumns } from '../../../kanban/components/column/column';
import { ColumnCard } from '../column-card/column-card';
import { AddColModal } from '../add-col-modal/add-col-modal';
import { fetchDelCol } from '../../../../__data__/middleware/kanban.thunk';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { Space, Button } from 'antd';
import {
  SColumnContainer,
  SColumnContHeader,
  SColumnContFooter,
} from './columns-section.styled';
import { SectionTitle } from '../section-title/section-title';

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
          <SectionTitle
            title={'Колонки проекта'}
            desc={'Настройка и редактирования колонок'}
          />
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
