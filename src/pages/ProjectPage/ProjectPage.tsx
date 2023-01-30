import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchAllProjectColumns } from './store/column.thunk';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { IProjectColumn } from './store/column.type';
import { v4 } from 'uuid';

export const ProjectPage: React.FC = (): JSX.Element => {
  const { state } = useLocation();
  const dispatch = useAppDispatch();
  const { columns } = useTypedSelector((state) => state.projectColumns);

  useEffect(() => {
    dispatch(fetchAllProjectColumns(state.id));
  }, [state.id, dispatch]);

  return (
    <div>
      <p>Project page id:{state.id}</p>

      <div>
        {columns &&
          columns.map((col: IProjectColumn) => {
            return (
              <div key={v4()}>
                <span>{col.name}</span>
                <div>{col.description}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
