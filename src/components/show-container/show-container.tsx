import React, { ReactNode } from 'react';

interface ShowContainerProps {
  rule: boolean;
  children: ReactNode;
}

export const ShowContainer: React.FC<ShowContainerProps> = ({
  children,
  rule,
}) => {
  if (!rule) {
    return null;
  }
  return <>{children}</>;
};
