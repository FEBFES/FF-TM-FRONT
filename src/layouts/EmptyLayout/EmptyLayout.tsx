import React, { useEffect } from 'react';

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

  return <div>{children}</div>;
};
