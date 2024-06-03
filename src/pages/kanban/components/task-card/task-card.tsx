import React from "react"
// import { delTaskFromCol } from '../../../../__data__/reducers/kanban.slice';
import { useAppDispatch } from "../../../../hooks/redux"
// import { fetchGetTaskInfo } from '../../../../__data__/middleware/kanban.thunk';
import { Flex, Typography, Avatar, Tag, Space } from "antd"
import { getAvatarUrlOrHuman } from "../../../../utils/utils"
import { ITask } from "./task-card.type"
import "moment/locale/ru"
import { STask } from "./task-card.styled"
import { FileTextOutlined } from "@ant-design/icons"
import { Priority } from "../priority/priority"
import { Draggable } from "react-beautiful-dnd"

interface TaskCardProps {
	task: ITask
	delTask: any
	setShowTaskModal: (bool: boolean) => void
	index: number
}

export const TaskCard: React.FC<TaskCardProps> = ({
	task,
	delTask,
	setShowTaskModal,
	index,
}): JSX.Element => {
	const dispatch = useAppDispatch()

	const getTaskInfo = () => {
		setShowTaskModal(true)
		// dispatch(
		//   fetchGetTaskInfo({
		//     projId: task.projectId,
		//     colId: task.columnId,
		//     taskId: task.id,
		//   })
		// );
	}

	return (
		<Draggable draggableId={`${JSON.stringify(task)}`} key={task.id} index={index}>
			{(provided, snapshot) => (
				<STask
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					// isDragging={snapshot.isDragging}
					onClick={() => getTaskInfo()}
					hoverable
					draggable
					size={"small"}
					id={`${task.id}`}>
					<Space>
						<Priority priority={task.priority} />
						<Typography.Text>#{task.id}</Typography.Text>
						{task.type && <Tag>{task.type}</Tag>}
					</Space>

					<Typography.Paragraph>{task.name || ""}</Typography.Paragraph>

					<Flex justify={"space-between"} align={"center"}>
						<Avatar size={"small"} src={getAvatarUrlOrHuman(task.assignee?.userPic)} />

						<Space>
							{/*<Space>*/}
							{/*  <CommentOutlined />*/}
							{/*  <Typography.Text>1</Typography.Text>*/}
							{/*</Space>*/}
							<Space>
								<FileTextOutlined />
								<Typography.Text>2</Typography.Text>
							</Space>
						</Space>
					</Flex>
				</STask>
			)}
		</Draggable>
	)
}
