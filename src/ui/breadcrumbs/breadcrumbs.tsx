import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../typography';
import { Flex } from '../Flex/Flex';
import { Space } from '../Space/Space';

export interface IBreadcrumbsItem {
  href?: string | undefined;
  title: string;
}

interface BreadcrumbsProps {
  items: IBreadcrumbsItem[];
  separator?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = '/',
}): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Flex ai={'center'} jc={'start'}>
      {items.map((link: IBreadcrumbsItem, index: number) => {
        const isNotLastItem = index !== items.length - 1;
        return (
          <Flex key={index}>
            <Text
              //todo add hover, cursor, text-decoration styles
              onClick={() => {
                link.href && navigate(link.href);
              }}
            >
              {link.title}
            </Text>
            <Space mx={'2xs'} />
            {isNotLastItem && (
              <Text>
                <Space mx={'2xs'} />
                {separator}
                <Space mx={'xs'} />
              </Text>
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};
