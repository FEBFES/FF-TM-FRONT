import React, { useEffect, useState } from 'react';
import { useAppDispatch } from './hooks/redux';
import { useOffline } from './hooks/use-offline';
import { RouteComponent } from './routing/route-component';

export const App = () => {
  const dispatch = useAppDispatch();

  useOffline();
  // useTheme();

  return <RouteComponent />;
};
