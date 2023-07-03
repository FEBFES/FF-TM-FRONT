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
          {/* todo i18next */}
          <h1 className={styles.cont__headerTitle}>Create new project</h1>
          <Button theme={'close'} onClick={() => setShow(false)}>
            x
          </Button>
        </div>

        <div className={styles.projCont}>
          {/* todo i18next */}
          <InputField
            placeholder={'Name'}
            type={'text'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* todo i18next */}
          <InputField
            placeholder={'Description'}
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
            {/* todo i18next */}
            Cancel
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
            {/* todo i18next */}
            Create
          </Button>
        </div>
      </div>
    </Modal>
  );
};
