import React from "react"
import { v4 } from "uuid"
import { useAppDispatch } from "../../../../hooks/redux"
// import { fetchChangeTask } from '../../../../__data__/middleware/kanban.thunk';
import { TaskCard, ITask } from "../index"
import { SColumn, SColHeader, SColWrap } from "./column.styled"
import { Typography } from "antd"
import { Droppable } from "react-beautiful-dnd"

export interface IColumns {
	projectId: number
	id: number
	name: string
	columnOrder: number
	tasks: ITask[]
}

export interface ColumnProps {
	col: IColumns
	delTask: (colId: number, taskId: number) => void
	setShowAddTaskModal: (bool: boolean) => void
	setCurCol: (col: IColumns) => void
	setShowTaskModal: (bool: boolean) => void
	index: number
}

export const Column: React.FC<ColumnProps> = ({
	col,
	delTask,
	setShowAddTaskModal,
	setCurCol,
	index,
	setShowTaskModal,
}): JSX.Element => {
	const dispatch = useAppDispatch()

	const handleDragEnd = () => {}

	return (
		<SColWrap key={v4()}>
			<SColHeader>
				<Typography>
					{col.name || ""} {col.tasks?.length !== 0 ? col.tasks?.length : null}
				</Typography>
				<div
					onClick={() => {
						setShowAddTaskModal(true)
						setCurCol(col)
					}}>
					+ PlusIcon
				</div>
			</SColHeader>
			<Droppable droppableId={`${col.id}`}>
				{(provided: any, snapshot: any) => (
					<SColumn
						index={index}
						ref={provided.innerRef}
						{...provided.droppableProps}
						isDraggingOver={snapshot.isDraggingOver}
						id={`${col.id}`}>
						{col?.tasks?.map((task: ITask, index: number) => {
							return (
								<TaskCard
									index={index}
									delTask={delTask}
									setShowTaskModal={setShowTaskModal}
									key={v4()}
									task={task}
								/>
							)
						})}
					</SColumn>
				)}
			</Droppable>
		</SColWrap>
	)
}
