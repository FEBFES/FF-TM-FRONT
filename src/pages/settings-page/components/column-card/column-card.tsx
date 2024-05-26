import React, { useState } from 'react';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchUpdateCol } from '../../../kanban-page/store/kanban.thunk';
import { Typography, Flex, Button, Space, Popconfirm } from 'antd';
import { IColumns } from '../../../kanban-page/components/column/column';
import { SCard, SColumn } from './column-card.styled';
import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
} from '@ant-design/icons';

export interface ColumnCardProps {
  column: IColumns;
  onDelete: (projId: number, colId: number) => void;
}

export const ColumnCard: React.FC<ColumnCardProps> = ({
  column,
  onDelete,
}): JSX.Element => {
  const [colName] = useState<string>(column.name || '');
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const updateColumn = (projId: number, colId: number) => {
    dispatch(
      fetchUpdateCol({ projId: projId, colId: colId, newName: colName })
    ).finally(() => {
      setIsEditMode(false);
    });
  };

  const editModeToggle = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <SCard>
      <SColumn>
        <Flex dir={'col'}>
          <Typography.Paragraph editable={{ onChange: () => {} }}>
            {column.name}
          </Typography.Paragraph>
        </Flex>

        <Space>
          {isEditMode ? (
            <Button onClick={editModeToggle}>
              <CloseOutlined />
            </Button>
          ) : (
            <Button onClick={editModeToggle}>
              <EditOutlined />
            </Button>
          )}

          {isEditMode && (
            <Button
              type={'primary'}
              onClick={() => updateColumn(column.projectId, column.id)}
            >
              <SaveOutlined />
            </Button>
          )}

          <Popconfirm
            title="Удалить колонку ?"
            onConfirm={() => onDelete(column.projectId, column.id)}
            onCancel={() => {}}
            okText="Да"
            cancelText="Нет"
          >
            <Button
              danger
              type={'default'}
              onClick={() => onDelete(column.projectId, column.id)}
            >
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </Space>
      </SColumn>
    </SCard>
  );
};
