import React, { useState } from 'react';
import { ITask } from '../task-card/task-card.type';
import { fetchGetTaskInfo } from '../../store/kanban.thunk';
import { useAppDispatch } from '../../../../hooks/redux';
import { DotsIcon } from '../../../../assets/icons/UtilsIcons';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { Typography, Flex, Dropdown, Avatar } from 'antd';
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
        <Flex>
          {/*//todo*/}
          {/*<PriorityLabel priority={task.priority} />*/}
          <Typography>#{task.id}</Typography>
        </Flex>
        <Typography
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
        </Typography>
        <Typography>{task.description}</Typography>
      </SCardInfo>

      {/*todo change to grid*/}
      {/*<div className={styles.card__date}>*/}
      {/*    <FontAwesomeIcon icon={faCalendar}/>*/}
      {/*    {moment(task.createDate).format('DD.MM.YYYY')}*/}
      {/*</div>*/}

      <Flex>
        <STaskLabel>
          {/*//todo*/}
          {/*<TaskLabel type={task.type} />*/}
        </STaskLabel>
        <Avatar src={getAvatarUrlOrHuman(task.owner.userPic)} />
        <STaskAttachments
          onClick={() => {
            setShowDD(true);
          }}
        >
          <Dropdown
            open={showDD}
            //todo
            // setShow={setShowDD}
          >
            <SDeleteButton onClick={() => delTask(task.columnId, task.id)}>
              delete
            </SDeleteButton>
          </Dropdown>
          <DotsIcon w={12} />
        </STaskAttachments>
      </Flex>
    </SCard>
  );
};
