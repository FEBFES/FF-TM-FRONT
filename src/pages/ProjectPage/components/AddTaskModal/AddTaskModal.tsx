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
import { PriorityDefault } from '../../../../assets/icons/TaskIcons';
import { Switcher } from '../../../../ui/Switcher/Switcher';

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
  const [isMultiple, setIsMultiple] = useState(false);

  const clearModalData = () => {
    setName('');
    setDescription('');
  };

  return (
    <Modal
      title={'Add new task'}
      show={show}
      setShow={setShow}
      onSubmit={() => onSubmit(name, description)}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header__left}>
            <span>id: FRONT</span>

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
            placeholder={'Task title'}
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type={'text'}
            value={description}
            placeholder={'Task description...'}
            className={styles.input}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className={styles.additionally}>
            <div className={styles.additionally__left}>
              <div>
                Type: <span className={styles.task_type}>R</span>
              </div>
              <div>
                Priority: <PriorityDefault />
              </div>
            </div>

            <div className={styles.additionally__right}>
              <div>
                Assignee: <PlusIcon />
              </div>
              <div>
                Tags: <PlusIcon />
              </div>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.checkbox}>
            <span className={styles.checkbox_label}>Create multiple:</span>
            <Switcher
              onClick={() => setIsMultiple((prevState) => !prevState)}
              isActive={isMultiple}
            />
          </div>
          <Button
            onClick={() => {
              onSubmit(name, description);
              if (isMultiple) {
                clearModalData();
              } else {
                setShow(false);
              }
            }}
            theme={'default'}
            className={styles.submitBtn}
          >
            Create Task
          </Button>
        </footer>
      </div>
    </Modal>
  );
};
