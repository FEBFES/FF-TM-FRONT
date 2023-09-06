import React, { useState } from 'react';
import {
  CloseIcon,
  EyeIcons,
  FullIcon,
} from '../../../../assets/icons/UtilsIcons';
import { Switcher, Modal, Button, Text } from '../../../../ui';
import {
  PrioritySelect,
  IPriorityType,
  ITypeSelectType,
  TypeSelect,
  MemberCard,
  IColumns,
} from '../../components';
import i18n from 'i18next';
import { IMember } from '../../store/kanban.type';
import { AddAssigneeModal } from '../add-assignee-modal/add-assignee-modal';
import {
  SContainer,
  SHeader,
  STaskPriority,
  STaskType,
  SHeaderRight,
  SHeaderLeft,
  SCheckbox,
  SAssigneeCcontainer,
  SMainSection,
  SInputField,
  SAdditionally,
  SAdditionallyRight,
  SAdditionallyLeft,
  SFooter,
} from './add-task-modal.styled';

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
      <SContainer>
        <SHeader>
          <SHeaderLeft>
            <Text>
              {/*//todo*/}
              {i18n.t('utils.any.status')}: {curCol?.name}
            </Text>
          </SHeaderLeft>

          <SHeaderRight>
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
          </SHeaderRight>
        </SHeader>

        <SMainSection>
          <SInputField
            type={'text'}
            value={name}
            placeholder={i18n.t('utils.any.name')}
            onChange={(e) => setName(e.target.value)}
          />
          <SInputField
            type={'text'}
            value={description}
            placeholder={i18n.t('utils.any.description')}
            onChange={(e) => setDescription(e.target.value)}
          />

          <SAdditionally>
            <SAdditionallyLeft>
              <STaskType>
                {i18n.t('utils.any.type')}:
                <TypeSelect
                  direction={'bottom'}
                  curType={curTaskType}
                  setCurType={setCurTaskType}
                />
              </STaskType>
              <STaskPriority>
                {i18n.t('utils.any.priority')}:
                <PrioritySelect
                  direction={'bottom'}
                  curPriority={curPriority}
                  setCurPriority={setCurPriority}
                />
              </STaskPriority>
            </SAdditionallyLeft>

            <SAdditionallyRight>
              <SAssigneeCcontainer>
                <Text>{i18n.t('utils.any.assignee')}:</Text>
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
              </SAssigneeCcontainer>
            </SAdditionallyRight>
          </SAdditionally>
        </SMainSection>

        <SFooter>
          <SCheckbox>
            <Text>
              {i18n.t('pages.kanban.components.modal.add.createMultiple')}:
            </Text>
            <Switcher
              onClick={() => setIsMultiple((prevState) => !prevState)}
              isActive={isMultiple}
            />
          </SCheckbox>
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
        </SFooter>
      </SContainer>
    </Modal>
  );
};
