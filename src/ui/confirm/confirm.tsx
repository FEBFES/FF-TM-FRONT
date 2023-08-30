import React from 'react';
import { Modal } from '../modal/modal';
import { Button } from '../Button/Button';
import i18n from 'i18next';
import { Title } from '../Typography';
import { SButtonContainer, SConfirmContainer } from './confirm.styled';

export interface ConfirmProps {
  show: boolean;
  setShow: (bool: boolean) => void;
  title: string;
  onConfirm: () => void;
}

export const Confirm: React.FC<ConfirmProps> = ({
  show,
  setShow,
  title,
  onConfirm,
}): JSX.Element => {
  return (
    <Modal show={show} setShow={setShow}>
      <SConfirmContainer>
        <Title level={'h6'}>{title}</Title>
        <SButtonContainer>
          <Button variant={'danger'} onClick={() => setShow(false)}>
            {i18n.t('utils.buttons.back')}
          </Button>
          <Button
            variant={'primary'}
            onClick={() => {
              onConfirm();
              setShow(false);
            }}
          >
            {i18n.t('utils.buttons.confirm')}
          </Button>
        </SButtonContainer>
      </SConfirmContainer>
    </Modal>
  );
};
