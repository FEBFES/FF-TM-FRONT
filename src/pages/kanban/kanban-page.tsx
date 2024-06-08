import React, { useEffect, useState } from 'react';
import { KanbanPageMain } from './modules/kanban-page-main/kanban-page-main';
import { KanbanPageSubheader } from './modules/kanban-page-subheader/kanban-page-subheader';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { TaskDrawer } from './modules/drawer/drawer';
import { DragDropContext } from 'react-beautiful-dnd';
// import { fetchProjectDashboard } from './__data__/thunk/kanban.thunk';
import { addTaskToCol, delTaskFromCol } from './__data__/reducers/kanban.slice';
import { appRoutsPath } from '../../routing/route-list';

export const KanbanPage: React.FC = (): JSX.Element => {
  const [showTaskModal, setShowTaskModal] = useState<boolean>(false);
  const curProjId = useTypedSelector((state) => state.kanban.projId);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (curProjId) {
      // dispatch(fetchProjectDashboard({ projId: curProjId }));
    } else {
      navigate(appRoutsPath.ProjectPage.to, { replace: true });
    }
  }, [curProjId, dispatch]);

  if (!curProjId) return <div></div>;
  // useEffect(() => {
  //   if (!curProjId) {
  //     navigate('/');
  //   }
  // }, [curProjId, navigate]);

  const dragEndHandler = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination || source.droppableId === destination.droppableId) return;

    dispatch(
      delTaskFromCol({
        columnId: +source.droppableId,
        id: +JSON.parse(draggableId).id,
      })
    );

    dispatch(
      addTaskToCol({
        colId: +destination.droppableId,
        task: JSON.parse(draggableId),
      })
    );
  };

  return (
    <div style={{ height: '100%' }}>
      <KanbanPageSubheader />
      <DragDropContext onDragEnd={dragEndHandler}>
        <KanbanPageMain setShowTaskModal={setShowTaskModal} />
      </DragDropContext>

      <TaskDrawer
        showTaskModal={showTaskModal}
        setShowTaskModal={setShowTaskModal}
      />
    </div>
  );
};
