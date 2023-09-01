import React, { useState } from 'react';
import { delTaskFromCol } from '../../store/kanban.slice';
import { useAppDispatch } from '../../../../hooks/redux';
import { AttachmentsIcon } from '../../../../assets/icons/TaskIcons';
import { fetchGetTaskInfo } from '../../store/kanban.thunk';
import moment from 'moment';
import { DotsIcon } from '../../../../assets/icons/UtilsIcons';
import { DropDown } from '../../../../ui/drop-down/drop-down';
import { TaskLabel } from '../../../../ui/task-label/task-label';
import { PriorityLabel } from '../../../../ui/priority-label/priority-label';
import i18n from 'i18next';
import { Avatar } from '../../../../ui/avatar/avatar';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { ITask } from './task-card.type';
import 'moment/locale/ru';
import { Text, Title } from '../../../../ui/typography';
import { Space } from '../../../../ui/space/space';
import { Flex } from '../../../../ui/flex/flex';
import {
  STaskAttachments,
  STaskFooter,
  STaskMain,
  STask,
} from './task-card.styled';

interface TaskCardProps {
  task: ITask;
  delTask: any;
  setShowTaskModal: (bool: boolean) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  delTask,
  setShowTaskModal,
}): JSX.Element => {
  const [showDD, setShowDD] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const getTaskInfo = () => {
    setShowTaskModal(true);
    dispatch(
      fetchGetTaskInfo({
        projId: task.projectId,
        colId: task.columnId,
        taskId: task.id,
      })
    );
  };

  return (
    <STask
      onDragStart={(e: any) => {
        e.dataTransfer.setData('task', JSON.stringify(task));
        setTimeout(() => {
          e.target.style.display = 'none';
          dispatch(delTaskFromCol(task));
        }, 0);
      }}
      draggable
      id={`${task.id}`}
    >
      <Flex ai={'center'} jc={'between'}>
        <Flex ai={'center'} jc={'start'}>
          <PriorityLabel priority={task.priority} />
          <Space size={'2xs'} />
          <Title
            // color: #989898; todo
            level={'h6'}
          >
            #{task.id || ''}
          </Title>
        </Flex>

        {task.assignee?.userPic && (
          <Avatar
            size={'s'}
            src={getAvatarUrlOrHuman(task.assignee?.userPic)}
          />
        )}
      </Flex>

      <STaskMain>
        <Title
          hover={'underline'}
          cursor={'pointer'}
          level={'h6'}
          className={'ellipsis_text'}
          onClick={getTaskInfo}
        >
          {task.name || ''}
        </Title>
        <Text>
          {/*todo Сделать авто смену локали и связать с i18n мб черзе хук */}
          {moment(task.createDate).locale('ru').format('MMM DD')}
        </Text>
      </STaskMain>

      <STaskFooter>
        <Flex ai={'center'}>
          <TaskLabel type={task.type} />
        </Flex>

        <Flex ai={'center'}>
          {/*<div className={styles.task_attachments}>*/}
          {/*  <span className={styles.task_attachments_counter}>8</span>*/}
          {/*  <CommentsIcon />*/}
          {/*</div>*/}
          {task.filesCounter !== 0 && (
            <STaskAttachments>
              <Text>{task.filesCounter || ''}</Text>
              <AttachmentsIcon />
            </STaskAttachments>
          )}
          <STaskAttachments onClick={() => setShowDD(true)}>
            <DropDown show={showDD} setShow={setShowDD}>
              <Text onClick={() => delTask(task.columnId, task.id)}>
                {i18n.t('utils.buttons.delete')}
              </Text>
            </DropDown>
            <DotsIcon w={12} />
          </STaskAttachments>
        </Flex>
      </STaskFooter>
    </STask>
  );
};
