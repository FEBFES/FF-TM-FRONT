import React, { useState } from 'react';
import styles from './AddColModal.module.css';
import { AddColModalProps } from './AddColModal.props';
import { Modal } from '../../../../ui/Modal/Modal';
import { Button } from '../../../../ui/Button/Button';
import { InputField } from '../../../../ui/InputField/InputField';
import { instance } from '../../../../api/http';
import { useTypedSelector } from '../../../../hooks/redux';

export const AddColModal: React.FC<AddColModalProps> = ({
  show,
  setShow,
}): JSX.Element => {
  const [colName, setColName] = useState<string>('');
  //todo изменить логику чтоб curproj не был null
  const projId = useTypedSelector((state) => state.projects?.curProj?.id);

  //todo change to action, добавить обработку тостами и при успешном запросе добавлять колонку в стейт
  const addNewColumn = () => {
    instance
      .post(`projects/${projId}/columns`, {
        name: colName,
      })
      .then((res) => {
        setShow(false);
      });
  };

  return (
    <Modal show={show} setShow={setShow}>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <h1 className={styles.modal__title}>Add new column</h1>

          <Button theme={'close'} onClick={() => setShow(false)} />
        </div>

        <div className={styles.modal__main}>
          <InputField
            withLabel
            value={colName}
            onChange={(e) => setColName(e.target.value)}
            placeholder={'Column name'}
            type={'text'}
          />
        </div>

        <div className={styles.modal__footer}>
          <Button theme={'danger'} onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button theme={'primary'} onClick={addNewColumn}>
            Add
          </Button>
        </div>
      </div>
    </Modal>
  );
};
