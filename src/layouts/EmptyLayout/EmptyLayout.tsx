import React, { useEffect } from 'react';
import styles from './EmptyLayout.module.css';
import { LogoIconDark } from '../../assets/icons/LogoIconDark';
import { LogoIconLight } from '../../assets/icons/LogoIconLight';
import { useTypedSelector } from '../../hooks/redux';

interface EmptyLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export const EmptyLayout: React.FC<EmptyLayoutProps> = ({
  children,
  pageTitle,
}): JSX.Element => {
  const theme = useTypedSelector((state) => state.app.theme);

  //todo объеединить в хук во всех лайоутах
  useEffect(() => {
    const initialDocTitle = document.title;

    return () => {
      document.title = initialDocTitle;
    };
  });

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div className={styles.emptyLayout}>
      <div className={styles.logo}>
        {theme === 'dark' ? <LogoIconDark /> : <LogoIconLight />}
      </div>
      {children}
    </div>
  );
};
