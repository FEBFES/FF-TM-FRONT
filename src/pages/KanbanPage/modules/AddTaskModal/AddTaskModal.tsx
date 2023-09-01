import React, { useState } from 'react';
import styles from './AddTaskModal.module.css';
import { Modal } from '../../../../ui/modal/modal';
import { InputField } from '../../../../ui/input-field/Input-field';
import { Button } from '../../../../ui/button/button';
import {
  CloseIcon,
  EyeIcons,
  FullIcon,
} from '../../../../assets/icons/UtilsIcons';
import { Switcher } from '../../../../ui/switcher/switcher';
import {
  PrioritySelect,
  IPriorityType,
} from '../../components/priority-select/priority-select';
import {
  ITypeSelectType,
  TypeSelect,
} from '../../components/type-select/type-select';
import i18n from 'i18next';
import { IMember } from '../../store/kanban.type';
import { MemberCard } from '../../components/member-card/member-card';
import { IColumns } from '../../components/column/column';
import { AddAssigneeModal } from '../add-assignee-modal/add-assignee-modal';
import { Text } from '../../../../ui/typography/text/text';

interface AddTaskModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
  curCol: IColumns | null;
  onSubmit: (
    name: string,
    description: string,
    priority: IPriorityType,
    type: ITypeSelectType,
    assigneeId: number | null | undefined
  ) => void;
}

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
  const [curAssignee, setCurAssignee] = useState<IMember | null>(null);
  const [showAssignee, setShowAssignee] = useState<boolean>(false);

  const clearModalData = () => {
    setName('');
    setDescription('');
    setCurTaskType('NONE');
    setCurPriority('DEFAULT');
    setCurAssignee(null);
  };

  return (
    <Modal show={show} setShow={setShow}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header__left}>
            <Text>
              {/*//todo*/}
              {i18n.t('utils.any.status')}: {curCol?.name}
            </Text>
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
              <div className={styles.assignee__container}>
                <Text
                //todo
                // className={styles.assignee__label}
                >
                  {i18n.t('utils.any.assignee')}:
                </Text>
                {curAssignee === null ? (
                  <AddAssigneeModal
                    setShowAssignee={setShowAssignee}
                    showAssignee={showAssignee}
                    setCurAssignee={setCurAssignee}
                  />
                ) : (
                  <MemberCard
                    bordered
                    member={curAssignee}
                    onClick={() => setCurAssignee(null)}
                  />
                )}
              </div>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.checkbox}>
            <Text
            //todo
            // className={styles.checkbox_label}
            >
              {i18n.t('pages.kanban.components.modal.add.createMultiple')}:
            </Text>
            <Switcher
              onClick={() => setIsMultiple((prevState) => !prevState)}
              isActive={isMultiple}
            />
          </div>
          <Button
            onClick={() => {
              onSubmit(
                name,
                description,
                curPriority,
                curTaskType,
                curAssignee?.id
              );
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
