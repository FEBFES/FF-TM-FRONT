import React, { useState } from 'react';
import styles from './AddNewProjModal.module.css';
import { fetchAddProject } from '../../store/projects.thunk';
import { InputField } from '../../../../ui/InputField/InputField';
import { Modal } from '../../../../ui/Modal/Modal';
import { useAppDispatch } from '../../../../hooks/redux';

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
    <Modal
      onSubmit={() => dispatch(fetchAddProject({ name, desc }))}
      title={'Создать новый проект'}
      show={show}
      setShow={setShow}
    >
      <div className={styles.projCont}>
        <InputField
          type={'text'}
          label={'Project name'}
          value={name}
          onChange={(name) => setName(name)}
        />
        <InputField
          type={'text'}
          label={'Description'}
          value={desc}
          onChange={(desc) => setDesc(desc)}
        />
      </div>
    </Modal>
  );
};
