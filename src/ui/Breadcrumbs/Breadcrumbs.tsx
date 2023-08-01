import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../Typography';
import { Flex } from '../Flex/Flex';
import { Space } from '../Space/Space';

export interface IBreadcrumbsItem {
  href: string | undefined;
  title: string;
}

interface BreadcrumbsProps {
  items: IBreadcrumbsItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
}): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Flex ai={'center'} jc={'start'}>
      {items.map((link: IBreadcrumbsItem, index: number) => {
        return (
          <Flex>
            <Text
              onClick={() => {
                link.href && navigate(link.href);
              }}
            >
              {link.title}
            </Text>
            <Space mx={'s'} />
          </Flex>
        );
      })}
    </Flex>
  );
};
