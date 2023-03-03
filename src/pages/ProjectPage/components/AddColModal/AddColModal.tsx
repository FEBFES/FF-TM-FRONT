import React, { useState } from 'react';
import styles from './AddColModal.module.css';
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
      <div className={styles.contCol}>
        <InputField
          type={'text'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          type={'text'}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </Modal>
  );
};
