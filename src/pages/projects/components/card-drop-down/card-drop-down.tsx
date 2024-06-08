import { Button, Dropdown } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import React from 'react';

interface CardDropDownProps {
  isFavourite: boolean;
  favoriteToggle: () => void;
  deleteProject: () => void;
}

export const CardDropDown: React.FC<CardDropDownProps> = ({
  isFavourite,
  favoriteToggle,
  deleteProject,
}) => {
  return (
    <Dropdown
      trigger={['click']}
      menu={{
        items: [
          {
            key: '2',
            label: (
              <Button onClick={favoriteToggle}>
                {isFavourite ? 'Из избранного' : 'В избранное'}
              </Button>
            ),
          },
          {
            key: '3',
            label: (
              <Button onClick={() => deleteProject()} danger>
                Удалить
              </Button>
            ),
          },
        ],
      }}
    >
      <Button size={'small'} type={'text'}>
        <EllipsisOutlined />
      </Button>
    </Dropdown>
  );
};
