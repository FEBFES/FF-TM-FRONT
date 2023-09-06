import React from 'react';
import { AvatarGroup } from '../avatar-group/avatar-group';
import { IMember } from '../../pages/kanban-page/store/kanban.type';

import renderer from 'react-test-renderer';

it('SNAPSHOTS: UI - AvatarGroup component - render', () => {
  const members: IMember[] = [
    {
      displayName: 'FrolovIvanchelooooo',
      email: 'vanyok@mail.ru',
      firstName: 'Ivan',
      id: 12542,
      lastName: 'Frolov',
      userPic: 'https://www.img.com/kartinki',
      username: 'юзя',
      role: 'MEMBER',
    },
  ];
  const elem = renderer
    .create(<AvatarGroup avatarSize="xs" members={members} />)
    .toJSON();
  expect(elem).toMatchSnapshot();
});
