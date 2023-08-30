import React from 'react';
import { faBars, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { setCurView } from '../../store/kanban.slice';
import { SSwitcher, SSwitcherItem } from './kanban-view-switcher.styled';

interface KanbanViewSwitcherProps {}

export const KanbanViewSwitcher: React.FC<
  KanbanViewSwitcherProps
> = (): JSX.Element => {
  const curView = useTypedSelector((state) => state.curProj.curView);
  const dispatch = useAppDispatch();

  return (
    <SSwitcher>
      <SSwitcherItem
        isActive={curView === 'col'}
        onClick={() => dispatch(setCurView('col'))}
        icon={faTableColumns}
      />
      <SSwitcherItem
        isActive={curView === 'row'}
        onClick={() => dispatch(setCurView('row'))}
        icon={faBars}
      />
    </SSwitcher>
  );
};
