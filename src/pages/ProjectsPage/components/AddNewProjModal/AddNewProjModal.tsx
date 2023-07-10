import React, { useState } from 'react';
import styles from './AddNewProjModal.module.css';
import { fetchAddProject } from '../../store/projects.thunk';
import { InputField } from '../../../../ui/InputField/InputField';
import { Modal } from '../../../../ui/Modal/Modal';
import { useAppDispatch } from '../../../../hooks/redux';
import { Button } from '../../../../ui/Button/Button';
import i18n from 'i18next';

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
          <h1 className={styles.cont__headerTitle}>
            {i18n.t('pages.projects.header.addBtn')}
          </h1>
          <Button theme={'close'} onClick={() => setShow(false)} />
        </div>

        <div className={styles.projCont}>
          <InputField
            placeholder={i18n.t('utils.any.name')}
            withLabel
            type={'text'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            placeholder={i18n.t('utils.any.description')}
            withLabel
            type={'text'}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className={styles.cont__footer}>
          <Button
            theme={'outline'}
            onClick={() => {
              setShow(false);
            }}
          >
            {i18n.t('utils.buttons.cancel')}
          </Button>
          <Button
            theme={'primary'}
            onClick={() => {
              dispatch(fetchAddProject({ name, desc }))
                .unwrap()
                .finally(() => {
                  setShow(false);
                });
            }}
          >
            {i18n.t('utils.buttons.create')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
