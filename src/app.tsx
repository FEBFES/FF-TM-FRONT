import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppDispatch, useTypedSelector } from "./hooks/redux";
// import { fetchProjects } from '../../__data__/middleware/projects.thunk';
// import { fetchGetUserInfo } from './__data__/request/user.thunk';
import { appRouts } from "./routing/routs";
import { EmptyLayout } from "./layouts/empty/empty-layout";
import { NotFoundPage } from "./pages/not-fount-404/not-found-page";
// import {
//   fetchProjectDashboard,
//   fetchProjectInfo,
// } from '../../__data__/middleware/kanban.thunk';
import { useOffline } from "./hooks/use-offline";
import { useTheme } from "./hooks/use-theme";
import { PrivateRoute } from "./routing/privat-route";
import { serverString } from "./config";
import { getProjectsThunk } from "./pages/projects/__data__/thunk/get-projects";

export const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const userId = useTypedSelector((state) => state.user.userId);
  // const projId = useTypedSelector((state) => state.curProj.projId);

  useEffect(() => {
    dispatch(getProjectsThunk());
    // dispatch(fetchGetUserInfo(userId));
    //   projId && dispatch(fetchProjectDashboard({ projId }));
    //   projId && dispatch(fetchProjectInfo(projId));
  }, [
    // userId,
    dispatch,
    // projId
  ]);

  useOffline();
  // useTheme();

  return (
    <Routes>
      {appRouts.map((route, i) => {
        return (
          <Route
            path={route.path}
            key={i}
            element={
              <route.layout pageTitle={route.title}>
                {/* <PrivateRoute> */}
                <route.component />
                {/* </PrivateRoute> */}
              </route.layout>
            }
          />
        );
      })}
      <Route
        path="*"
        element={
          <EmptyLayout pageTitle={"No Found Page"}>
            <NotFoundPage />
          </EmptyLayout>
        }
      />
    </Routes>
  );
};
