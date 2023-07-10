import React from 'react';
import styles from './Confirm.module.css';
import { Modal } from '../Modal/Modal';
import { ConfirmProps } from './Confirm.props';
import { Button } from '../Button/Button';
import i18n from 'i18next';

export const Confirm: React.FC<ConfirmProps> = ({
  show,
  setShow,
  title,
  onConfirm,
}): JSX.Element => {
  return (
    <Modal show={show} setShow={setShow}>
      <div className={styles.cont}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.btnCont}>
          <Button theme={'danger'} onClick={() => setShow(false)}>
            {i18n.t('utils.buttons.back')}
          </Button>
          <Button
            theme={'primary'}
            onClick={() => {
              onConfirm();
              setShow(false);
            }}
          >
            {i18n.t('utils.buttons.confirm')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
