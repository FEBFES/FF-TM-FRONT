import { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from './redux';
import { changeAppTheme } from '../store/App/AppSlice';

export const useTheme = () => {
  const theme = useTypedSelector((state) => state.app.theme);
  const dispatch = useAppDispatch();

  const changeTheme = () => {
    const curTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(changeAppTheme(curTheme));
    localStorage.setItem('theme', curTheme);
  };

  useEffect(() => {
    document
      .querySelector('meta[name=\'theme-color\']')
      ?.setAttribute('content', theme === 'dark' ? '#0d1117' : '#ffffff');
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return { theme, changeTheme };
};
