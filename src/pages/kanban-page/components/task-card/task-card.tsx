import React, { useState } from 'react';
import { delTaskFromCol } from '../../store/kanban.slice';
import { useAppDispatch } from '../../../../hooks/redux';
import { AttachmentsIcon } from '../../../../assets/icons/TaskIcons';
import { fetchGetTaskInfo } from '../../store/kanban.thunk';
import moment from 'moment';
import { DotsIcon } from '../../../../assets/icons/UtilsIcons';
import { Flex, Space, Typography, Avatar, Dropdown } from 'antd';
import i18n from 'i18next';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { ITask } from './task-card.type';
import 'moment/locale/ru';
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
      <Flex>
        <Flex>
          //todo
          {/*<PriorityLabel priority={task.priority} />*/}
          <Space />
          <Typography
          // color: #989898; todo
          >
            #{task.id || ''}
          </Typography>
        </Flex>

        {task.assignee?.userPic && (
          <Avatar src={getAvatarUrlOrHuman(task.assignee?.userPic)} />
        )}
      </Flex>

      <STaskMain>
        <Typography className={'ellipsis_text'} onClick={getTaskInfo}>
          {task.name || ''}
        </Typography>
        <Typography>
          {/*todo Сделать авто смену локали и связать с i18n мб черзе хук */}
          {moment(task.createDate).locale('ru').format('MMM DD')}
        </Typography>
      </STaskMain>

      <STaskFooter>
        <Flex>
          //todo
          {/*<TaskLabel type={task.type} />*/}
        </Flex>

        <Flex>
          {/*<div className={styles.task_attachments}>*/}
          {/*  <span className={styles.task_attachments_counter}>8</span>*/}
          {/*  <CommentsIcon />*/}
          {/*</div>*/}
          {task.filesCounter !== 0 && (
            <STaskAttachments>
              <Typography>{task.filesCounter || ''}</Typography>
              <AttachmentsIcon />
            </STaskAttachments>
          )}
          <STaskAttachments onClick={() => setShowDD(true)}>
            <Dropdown
              open={showDD}
              //todo
              // setShow={setShowDD}
            >
              <Typography onClick={() => delTask(task.columnId, task.id)}>
                {i18n.t('utils.buttons.delete')}
              </Typography>
            </Dropdown>
            <DotsIcon w={12} />
          </STaskAttachments>
        </Flex>
      </STaskFooter>
    </STask>
  );
};
