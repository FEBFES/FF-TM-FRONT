import React, { useState } from 'react';
import { ITask } from '../task-card/task-card.type';
import { fetchGetTaskInfo } from '../../store/kanban.thunk';
import { useAppDispatch } from '../../../../hooks/redux';
import i18n from 'i18next';
import { DotsIcon } from '../../../../assets/icons/UtilsIcons';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import {
  Flex,
  DropDown,
  Avatar,
  TaskLabel,
  PriorityLabel,
  Text,
  Title,
} from '../../../../ui';
import {
  SCard,
  STaskLabel,
  SCardInfo,
  STaskAttachments,
  SDeleteButton,
} from './task-row-card.styled';

export interface TaskRowCardProps {
  task: ITask;
  delTask: any;
  setShowTaskModal: (bool: boolean) => void;
}

export const TaskRowCard: React.FC<TaskRowCardProps> = ({
  task,
  delTask,
  setShowTaskModal,
}): JSX.Element => {
  const [showDD, setShowDD] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <SCard>
      <SCardInfo>
        <Flex ai={'center'}>
          <PriorityLabel priority={task.priority} />
          <Text>#{task.id}</Text>
        </Flex>
        <Title
          level={'h5'}
          onClick={() => {
            setShowTaskModal(true);
            dispatch(
              fetchGetTaskInfo({
                projId: task.projectId,
                colId: task.columnId,
                taskId: task.id,
              })
            );
          }}
        >
          {task.name}
        </Title>
        <Text>{task.description}</Text>
      </SCardInfo>

      {/*todo change to grid*/}
      {/*<div className={styles.card__date}>*/}
      {/*    <FontAwesomeIcon icon={faCalendar}/>*/}
      {/*    {moment(task.createDate).format('DD.MM.YYYY')}*/}
      {/*</div>*/}

      <Flex ai={'center'}>
        <STaskLabel>
          <TaskLabel type={task.type} />
        </STaskLabel>
        <Avatar size={'m'} src={getAvatarUrlOrHuman(task.owner.userPic)} />
        <STaskAttachments
          onClick={() => {
            setShowDD(true);
          }}
        >
          <DropDown show={showDD} setShow={setShowDD}>
            <SDeleteButton onClick={() => delTask(task.columnId, task.id)}>
              {i18n.t('utils.buttons.delete')}
            </SDeleteButton>
          </DropDown>
          <DotsIcon w={12} />
        </STaskAttachments>
      </Flex>
    </SCard>
  );
};
