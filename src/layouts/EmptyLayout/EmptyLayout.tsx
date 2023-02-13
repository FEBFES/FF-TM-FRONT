import React, { useEffect } from 'react';
import './EmptyLayout.scss';

interface EmptyLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export const EmptyLayout: React.FC<EmptyLayoutProps> = ({
  children,
  pageTitle,
}): JSX.Element => {
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

  return <div className={'emptyLayout'}>{children}</div>;
};
