import React, { useState } from 'react';
import './AddTaskModal.scss';
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
      <div className={'container'}>
        <InputField
          type={'text'}
          label={'name'}
          value={name}
          onChange={(e: string) => setName(e)}
        />
        <InputField
          type={'text'}
          label={'desc'}
          value={description}
          onChange={(e: string) => setDescription(e)}
        />
      </div>
    </Modal>
  );
};
