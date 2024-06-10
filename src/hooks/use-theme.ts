import { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from './redux';
// import { changeAppTheme } from '../pages/app/__data__/slices/app-slice';

export const useTheme = () => {
  // const theme = useTypedSelector((state) => state.app.theme);
  // const dispatch = useAppDispatch();

  const changeTheme = () => {
    // const curTheme = theme === 'dark' ? 'light' : 'dark';
    // dispatch(changeAppTheme(curTheme));
    // localStorage.setItem('theme', curTheme);
  };

  // useEffect(() => {
  //   document
  //     .querySelector('meta[name=\'theme-color\']')
  //     ?.setAttribute('content', '#141414');
  //   document.documentElement.dataset.theme = theme;
  // }, [theme]);

  return {
    // theme,
    changeTheme,
  };
};
