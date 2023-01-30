import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { v4 } from 'uuid';
import { fetchProjectDashboard } from './store/dashboard.thunk';
import { IColumns } from './store/dashboard.type';
import './ProjectPage.scss';
import { clearDashboardSlice } from './store/dashboard.slice';

export const ProjectPage: React.FC = (): JSX.Element => {
  const { state } = useLocation();
  const dispatch = useAppDispatch();
  //todo переписать и убрать найм и деск из стора колонки
  const { projectName, projectDesc } = useTypedSelector(
    (state) => state.projectColumns
  );
  const columns = useTypedSelector((state) => state.projectColumns.columns);
  const isLoading = useTypedSelector((state) => state.projectColumns.isLoading);
  const errorMsg = useTypedSelector((state) => state.projectColumns.errorMsg);

  useEffect(() => {
    console.log('asd');
    return () => {
      dispatch(clearDashboardSlice());
    };
  }, []);

  useEffect(() => {
    dispatch(fetchProjectDashboard(state.id));
  }, [state.id, dispatch]);

  return (
    <div className={'projpage'}>
      <h1>NAME PROJ - {projectName}</h1>
      <h2>DESC PROJ - {projectDesc}</h2>

      <div className={'col-cont'}>
        {isLoading && <div>LOADING....</div>}
        {errorMsg && <div>ОШИБКА - {errorMsg}</div>}

        {columns.map((col: IColumns) => {
          return (
            <div className={'colWrap'} key={v4()}>
              <span>name col - {col.name}</span>
              <button>add new +</button>
              <div className={'col'}>
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
