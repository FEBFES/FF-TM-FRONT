import React, { ReactNode } from 'react';
import { Empty } from 'antd';

interface ShowContainerProps {
  rule: boolean;
  children: ReactNode;
  desc?: string;
}

export const ShowContainer: React.FC<ShowContainerProps> = ({
  children,
  rule,
  desc,
}) => {
  if (!rule) {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={desc ?? 'Нету данных'}
      />
    );
  }
  return <>{children}</>;
};
