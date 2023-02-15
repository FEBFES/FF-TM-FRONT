import { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from './redux';
import { changeAppTheme } from '../store/slices/AppSlice';

export const useTheme = () => {
  const theme = useTypedSelector((state) => state.app.theme);
  const dispatch = useAppDispatch();

  const changeTheme = () => {
    const curTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(changeAppTheme(curTheme));
    localStorage.setItem('theme', curTheme);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return { theme, changeTheme };
};
