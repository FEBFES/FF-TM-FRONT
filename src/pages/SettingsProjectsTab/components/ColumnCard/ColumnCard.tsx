import React, { useState } from 'react';
import { ColumnCardProps } from './ColumnCard.props';
import styles from './ColumnCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faPen,
  faSave,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { InputField } from '../../../../ui/InputField/InputField';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchUpdateCol } from '../../../KanbanPage/store/kanban.thunk';
import { Tooltip } from '../../../../ui/Tooltip/Tooltip';
import i18n from 'i18next';

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
      // draggable
      className={classNames(styles.column, {
        [styles.column_edit]: isEditMode,
      })}
    >
      <div className={styles.column__left}>
        <p className={styles.subtitle}>#{column.id}</p>
        <h2 className={styles.title}>
          {isEditMode ? (
            <div>
              <InputField
                withLabel
                value={colName}
                className={styles.input}
                containerStyle={styles.inputCont}
                onChange={(e) => setColName(e.target.value)}
              />
            </div>
          ) : (
            <span>{column.name}</span>
          )}{' '}
        </h2>
      </div>

      <div className={styles.btnContainer}>
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
      </div>
    </div>
  );
};
