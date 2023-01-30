import React, { useState } from 'react';
import './AddNewProjModal.scss';
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
      <InputField
        type={'text'}
        label={'name'}
        value={name}
        onChange={(name) => setName(name)}
      />
      <InputField
        type={'text'}
        label={'desc'}
        value={desc}
        onChange={(desc) => setDesc(desc)}
      />
    </Modal>
  );
};
