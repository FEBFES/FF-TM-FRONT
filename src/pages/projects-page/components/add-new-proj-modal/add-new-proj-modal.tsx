import React, { useState } from 'react';
import { fetchAddProject } from '../../store/projects.thunk';
import { Modal, Input } from 'antd';
import { useAppDispatch } from '../../../../hooks/redux';
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

  const submitHandler = () => {
    dispatch(fetchAddProject({ name, desc }))
      .unwrap()
      .finally(() => {
        setShow(false);
      });
  };

  return (
    <Modal
      okText={'create'}
      onOk={submitHandler}
      onCancel={() => setShow(false)}
      title={i18n.t('pages.projects.header.addBtn')}
      open={show}
    >
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={i18n.t('utils.any.name')}
      />
      <Input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder={i18n.t('utils.any.description')}
      />
    </Modal>
  );
};
