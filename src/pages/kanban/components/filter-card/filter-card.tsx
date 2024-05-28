import React from 'react';
import { Typography } from 'antd';
import { SContainer, SFilter, SComponentCont } from './filter-card.styled';

export interface FilterCardProps {
  component: JSX.Element;
  title: string;
}

// todo проверить для чего
export const FilterCard: React.FC<FilterCardProps> = ({
  component,
  title,
}): JSX.Element => {
  return (
    <SContainer>
      <SFilter>
        <Typography>{title}:</Typography>
      </SFilter>
      <SComponentCont>{component}</SComponentCont>
    </SContainer>
  );
};
