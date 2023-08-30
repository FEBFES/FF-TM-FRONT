import React from 'react';
import { Text } from '../../../../ui/typography';
import { SContainer, SFilter, SComponentCont } from './filter-card.styled';

export interface FilterCardProps {
  component: JSX.Element;
  title: string;
}

export const FilterCard: React.FC<FilterCardProps> = ({
  component,
  title,
}): JSX.Element => {
  return (
    <SContainer>
      <SFilter>
        <Text>{title}:</Text>
      </SFilter>
      <SComponentCont>{component}</SComponentCont>
    </SContainer>
  );
};
