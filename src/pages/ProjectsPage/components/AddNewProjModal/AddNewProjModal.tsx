import React, { useState } from 'react';
import styles from './AddNewProjModal.module.css';
import { fetchAddProject } from '../../store/projects.thunk';
import { InputField } from '../../../../ui/InputField/InputField';
import { Modal } from '../../../../ui/Modal/Modal';
import { useAppDispatch } from '../../../../hooks/redux';
import { Button } from '../../../../ui/Button/Button';

interface AddNewProjModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
}

export const AddNewProjModal: React.FC<AddNewProjModalProps> = ({
  show,
  setShow,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  return (
    <Modal show={show} setShow={setShow}>
      <div className={styles.container}>
        <div className={styles.cont__header}>
          <h1 className={styles.cont__headerTitle}>Создать новый проект</h1>
          <Button theme={'close'} onClick={() => setShow(false)}>
            x
          </Button>
        </div>
        <div className={styles.projCont}>
          <InputField
            placeholder={'Name'}
            type={'text'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            placeholder={'Description'}
            type={'text'}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <Button
          theme={'submit'}
          onClick={() => {
            dispatch(fetchAddProject({ name, desc }))
              .unwrap()
              .finally(() => {
                setShow(false);
              });
          }}
        >
          Создать
        </Button>
      </div>
    </Modal>
  );
};
