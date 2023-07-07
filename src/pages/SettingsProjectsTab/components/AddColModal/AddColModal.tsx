import React, { useState } from 'react';
import styles from './AddColModal.module.css';
import { AddColModalProps } from './AddColModal.props';
import { Modal } from '../../../../ui/Modal/Modal';
import { Button } from '../../../../ui/Button/Button';
import { InputField } from '../../../../ui/InputField/InputField';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { fetchAddNewCol } from '../../../KanbanPage/store/kanban.thunk';
import i18n from 'i18next';

export const AddColModal: React.FC<AddColModalProps> = ({
  show,
  setShow,
}): JSX.Element => {
  const [colName, setColName] = useState<string>('');
  const [colDesc, setColDesc] = useState<string>('');
  const projId = useTypedSelector((state) => state.projectKanban.projId);
  const dispatch = useAppDispatch();

  const addNewColumn = () => {
    dispatch(
      fetchAddNewCol({
        name: colName,
        description: colDesc,
        projId: String(projId),
      })
    ).finally(() => {
      setShow(false);
      setColName('');
    });
  };

  return (
    <Modal show={show} setShow={setShow}>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <h1 className={styles.modal__title}>
            {i18n.t('pages.settings.tabs.profile.column.addNew')}
          </h1>

          <Button theme={'close'} onClick={() => setShow(false)} />
        </div>

        <div className={styles.modal__main}>
          <InputField
            withLabel
            value={colName}
            onChange={(e) => setColName(e.target.value)}
            placeholder={i18n.t('utils.any.name')}
            type={'text'}
          />
          <InputField
            withLabel
            value={colDesc}
            onChange={(e) => setColDesc(e.target.value)}
            placeholder={i18n.t('utils.any.description')}
            type={'text'}
          />
        </div>

        <div className={styles.modal__footer}>
          <Button theme={'danger'} onClick={() => setShow(false)}>
            {i18n.t('utils.buttons.cancel')}
          </Button>
          <Button
            disabled={colName === ''}
            theme={'primary'}
            onClick={addNewColumn}
          >
            {i18n.t('utils.buttons.create')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
