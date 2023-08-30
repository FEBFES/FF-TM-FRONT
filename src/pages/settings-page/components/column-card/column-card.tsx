import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faPen,
  faSave,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchUpdateCol } from '../../../KanbanPage/store/kanban.thunk';
import { Tooltip } from '../../../../ui/tooltip/tooltip';
import i18n from 'i18next';
import { Text, Title } from '../../../../ui/typography';
import { IColumns } from '../../../KanbanPage/components/Column/Column.type';
import { Flex } from '../../../../ui/flex/flex';
import {
  SColumn,
  SInputField,
  STrashButton,
  SEditButton,
  SSaveButton,
} from './column-card.styled';

export interface ColumnCardProps {
  column: IColumns;
  onDelete: (projId: number, colId: number) => void;
}

export const ColumnCard: React.FC<ColumnCardProps> = ({
  column,
  onDelete,
}): JSX.Element => {
  const [colName, setColName] = useState<string>(column.name || '');
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
    <SColumn isEdit={isEditMode}>
      <Flex dir={'col'}>
        <Text>#{column.id}</Text>
        <Title level={'h6'}>
          {isEditMode ? (
            <div>
              <SInputField
                withLabel
                value={colName}
                //TODO удален, проверить и удалить комментарий и саму строчку
                // containerStyle={styles.inputCont}
                onChange={(e) => setColName(e.target.value)}
              />
            </div>
          ) : (
            <span>{column.name}</span>
          )}{' '}
        </Title>
      </Flex>

      <Flex ai={'center'}>
        {isEditMode ? (
          <Tooltip title={i18n.t('utils.buttons.cancel')}>
            <STrashButton onClick={editModeToggle}>
              <FontAwesomeIcon size={'xs'} icon={faClose} />
            </STrashButton>
          </Tooltip>
        ) : (
          <Tooltip title={i18n.t('utils.buttons.edit')}>
            <SEditButton onClick={editModeToggle}>
              <FontAwesomeIcon size={'xs'} icon={faPen} />
            </SEditButton>
          </Tooltip>
        )}
        <Tooltip title={i18n.t('utils.buttons.delete')}>
          <STrashButton onClick={() => onDelete(column.projectId, column.id)}>
            <FontAwesomeIcon size={'xs'} icon={faTrashCan} />
          </STrashButton>
        </Tooltip>
        {isEditMode && (
          <Tooltip title={i18n.t('utils.buttons.save')}>
            <SSaveButton
              onClick={() => updateColumn(column.projectId, column.id)}
            >
              <FontAwesomeIcon size={'xs'} icon={faSave} />
            </SSaveButton>
          </Tooltip>
        )}
      </Flex>
    </SColumn>
  );
};
