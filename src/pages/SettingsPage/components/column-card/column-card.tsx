import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faPen,
  faSave,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { InputField } from '../../../../ui/input-field/Input-field';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchUpdateCol } from '../../../KanbanPage/store/kanban.thunk';
import { Tooltip } from '../../../../ui/tooltip/tooltip';
import i18n from 'i18next';
import { Text, Title } from '../../../../ui/typography';
import { IColumns } from '../../../KanbanPage/components/Column/Column.type';
import { Flex } from '../../../../ui/flex/flex';
import { SColumn } from './';

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
    <div
      className={classNames(styles.column, {
        [styles.column_edit]: isEditMode,
      })}
    >
      <Flex dir={'col'}>
        <Text>#{column.id}</Text>
        <Title level={'h6'}>
          {isEditMode ? (
            <div>
              <InputField
                withLabel
                value={colName}
                //TODO удален, проверить и удалить комментарий и саму строчку
                // containerStyle={styles.inputCont}
                className={styles.input}
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
            <div
              onClick={editModeToggle}
              className={classNames(styles.btn, styles.trashBtn)}
            >
              <FontAwesomeIcon size={'xs'} icon={faClose} />
            </div>
          </Tooltip>
        ) : (
          <Tooltip title={i18n.t('utils.buttons.edit')}>
            <div
              onClick={editModeToggle}
              className={classNames(styles.btn, styles.editBtn)}
            >
              <FontAwesomeIcon size={'xs'} icon={faPen} />
            </div>
          </Tooltip>
        )}
        <Tooltip title={i18n.t('utils.buttons.delete')}>
          <div
            className={classNames(styles.btn, styles.trashBtn)}
            onClick={() => onDelete(column.projectId, column.id)}
          >
            <FontAwesomeIcon size={'xs'} icon={faTrashCan} />
          </div>
        </Tooltip>
        {isEditMode && (
          <Tooltip title={i18n.t('utils.buttons.save')}>
            <div
              className={classNames(styles.btn, styles.saveBtn)}
              onClick={() => updateColumn(column.projectId, column.id)}
            >
              <FontAwesomeIcon size={'xs'} icon={faSave} />
            </div>
          </Tooltip>
        )}
      </Flex>
    </div>
  );
};
