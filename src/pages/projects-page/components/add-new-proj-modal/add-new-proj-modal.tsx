import React, { useState } from 'react';
import { fetchAddProject } from '../../store/projects.thunk';
import {Modal, Input, Space} from 'antd';
import { useAppDispatch } from '../../../../hooks/redux';
import i18n from 'i18next';
import styled from "styled-components";

interface AddNewProjModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
}

const ModalCont = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  height: 90px;
  justify-content: space-between;
  flex-direction: column;
`

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
      onOk={submitHandler}
      onCancel={() => setShow(false)}
      title={'Создать новый проект'}
      open={show}
      okText={'Создать'}
      cancelText={'Отменить'}
    >
        <ModalCont>
          <Input
              value={name}
              size={'large'}
              onChange={(e) => setName(e.target.value)}
              placeholder={'Название'}
          />
          <Input
              value={desc}
              size={'large'}
              onChange={(e) => setDesc(e.target.value)}
              placeholder={'Описание'}
          />
        </ModalCont>
    </Modal>
  );
};
