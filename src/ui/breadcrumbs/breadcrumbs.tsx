import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../typography';
import { Flex } from '../flex/flex';
import { Space } from '../space/space';

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
            <Space size={'2xs'} />
            {isNotLastItem && (
              <Text>
                <Space size={'2xs'} />
                {separator}
                <Space size={'xs'} />
              </Text>
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};
