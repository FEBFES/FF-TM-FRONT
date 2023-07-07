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

export const AddTaskModal: React.FC<AddTaskModalProps> = ({
  show,
  setShow,
  onSubmit,
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
            {/* //todo add i18next */}
            <span>id: FRONT</span>
            {/* //todo add i18next */}
            <span>status: BACKLOG</span>
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
            // {/* //todo add i18next */}
            placeholder={'Task title'}
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type={'text'}
            value={description}
            // {/* //todo add i18next */}
            placeholder={'Task description...'}
            className={styles.input}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className={styles.additionally}>
            <div className={styles.additionally__left}>
              <div className={styles.task_type}>
                {/* //todo add i18next */}
                Type:
                {/*<span className={styles.task_type}>*/}
                <TypeSelect
                  direction={'bottom'}
                  curType={curTaskType}
                  setCurType={setCurTaskType}
                />
                {/*</span>*/}
              </div>
              <div className={styles.task_priority}>
                {/* //todo add i18next */}
                Priority:{' '}
                <PrioritySelect
                  direction={'bottom'}
                  curPriority={curPriority}
                  setCurPriority={setCurPriority}
                />
              </div>
            </div>

            <div className={styles.additionally__right}>
              <div>
                {/* //todo add i18next */}
                Assignee: <PlusIcon />
              </div>
              <div>
                {/* //todo add i18next */}
                Tags: <PlusIcon />
              </div>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.checkbox}>
            {/* //todo add i18next */}
            <span className={styles.checkbox_label}>Create multiple:</span>
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
            theme={'default'}
            className={styles.submitBtn}
          >
            {/* //todo add i18next */}
            Create Task
          </Button>
        </footer>
      </div>
    </Modal>
  );
};
