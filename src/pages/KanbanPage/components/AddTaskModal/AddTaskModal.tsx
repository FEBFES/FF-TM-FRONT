import React, { useState } from 'react';
import styles from './AddTaskModal.module.css';
import { Modal } from '../../../../ui/Modal/Modal';
import { InputField } from '../../../../ui/InputField/InputField';
import { Button } from '../../../../ui/Button/Button';
import {
  CloseIcon,
  EyeIcons,
  FullIcon,
  PlusIcon,
} from '../../../../assets/icons/UtilsIcons';
import { Switcher } from '../../../../ui/Switcher';
import { AddTaskModalProps } from './AddTaskModal.props';
import { PrioritySelect } from '../PrioritySelect/PrioritySelect';
import { IPriorityType } from '../PrioritySelect/PrioritySelect.type';
import { ITypeSelectType, TypeSelect } from '../TypeSelect/TypeSelect';
import i18n from 'i18next';

export const AddTaskModal: React.FC<AddTaskModalProps> = ({
  show,
  setShow,
  onSubmit,
  curCol,
}): JSX.Element => {
  const [curTaskType, setCurTaskType] = useState<ITypeSelectType>('NONE');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isMultiple, setIsMultiple] = useState<boolean>(false);
  const [curPriority, setCurPriority] = useState<IPriorityType>('DEFAULT');

  const clearModalData = () => {
    setName('');
    setDescription('');
    setCurTaskType('NONE');
    setCurPriority('DEFAULT');
  };

  return (
    <Modal show={show} setShow={setShow}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header__left}>
            <span>
              {i18n.t('utils.any.status')}: {curCol?.name}
            </span>
          </div>

          <div className={styles.header__right}>
            <div>
              <EyeIcons />
            </div>

            <div>
              <FullIcon />
            </div>

            <div
              onClick={() => {
                setShow(false);
                clearModalData();
              }}
            >
              <CloseIcon />
            </div>
          </div>
        </header>

        <main className={styles.main}>
          <InputField
            type={'text'}
            value={name}
            placeholder={i18n.t('utils.any.name')}
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type={'text'}
            value={description}
            placeholder={i18n.t('utils.any.description')}
            className={styles.input}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className={styles.additionally}>
            <div className={styles.additionally__left}>
              <div className={styles.task_type}>
                {i18n.t('utils.any.type')}:
                <TypeSelect
                  direction={'bottom'}
                  curType={curTaskType}
                  setCurType={setCurTaskType}
                />
              </div>
              <div className={styles.task_priority}>
                {i18n.t('utils.any.priority')}:
                <PrioritySelect
                  direction={'bottom'}
                  curPriority={curPriority}
                  setCurPriority={setCurPriority}
                />
              </div>
            </div>

            <div className={styles.additionally__right}>
              <div>
                {i18n.t('utils.any.assignee')}: <PlusIcon />
              </div>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.checkbox}>
            <span className={styles.checkbox_label}>
              {i18n.t('pages.kanban.components.modal.add.createMultiple')}:
            </span>
            <Switcher
              onClick={() => setIsMultiple((prevState) => !prevState)}
              isActive={isMultiple}
            />
          </div>
          <Button
            onClick={() => {
              onSubmit(name, description, curPriority, curTaskType);
              if (isMultiple) {
                clearModalData();
              } else {
                setShow(false);
              }
            }}
            variant={'primary'}
          >
            {i18n.t('utils.buttons.create')}
          </Button>
        </footer>
      </div>
    </Modal>
  );
};
