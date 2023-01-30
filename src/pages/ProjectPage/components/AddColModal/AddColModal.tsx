import React, { useState } from 'react';
import { Modal } from '../../../../ui/Modal/Modal';
import { InputField } from '../../../../ui/InputField/InputField';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchAddNewCol } from '../../store/dashboard.thunk';
import { useParams } from 'react-router-dom';

interface AddColModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
}

export const AddColModal: React.FC<AddColModalProps> = ({
  show,
  setShow,
}): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const dispatch = useAppDispatch();
  const params = useParams();

  const onSubmit = () => {
    params.id &&
      dispatch(fetchAddNewCol({ name, description, projId: params.id }));
  };

  return (
    <Modal
      setShow={setShow}
      show={show}
      onSubmit={onSubmit}
      title={'Add new column'}
    >
      <div>
        <InputField
          type={'text'}
          label={'name'}
          value={name}
          onChange={(e) => setName(e)}
        />
        <InputField
          type={'text'}
          label={'desc'}
          value={description}
          onChange={(e) => setDescription(e)}
        />
      </div>
    </Modal>
  );
};
