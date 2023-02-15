import React, { useState } from 'react';
import styles from './AddTaskModal.module.css';
import { Modal } from '../../../../ui/Modal/Modal';
import { InputField } from '../../../../ui/InputField/InputField';

interface AddTaskModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
  onSubmit: (name: string, description: string) => void;
}

export const AddTaskModal: React.FC<AddTaskModalProps> = ({
  show,
  setShow,
  onSubmit,
}): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  return (
    <Modal
      title={'Add new task'}
      show={show}
      setShow={setShow}
      onSubmit={() => onSubmit(name, description)}
    >
      <div className={styles.container}>
        <InputField
          type={'text'}
          label={'Task name'}
          value={name}
          onChange={(e: string) => setName(e)}
        />
        <InputField
          type={'text'}
          label={'Description'}
          value={description}
          onChange={(e: string) => setDescription(e)}
        />
      </div>
    </Modal>
  );
};
