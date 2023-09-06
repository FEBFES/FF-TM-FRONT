import React from 'react';
import {AvatarGroup} from '../avatar-group/avatar-group';
import renderer from 'react-test-renderer';

it('SNAPSHOTS: UI - AvatarGroup component - render', () => {
    const members = [{
        displayName: 'DisplayName',
        email: 'test@mail.ru',
        firstName: 'Den',
        id: 123,
        lastName: 'Avabeloon',
        userPic: null,
        username: 'as',
        role: 'MEMBER'
    }]
    const elem = renderer.create(<AvatarGroup members={members} />).toJSON();
    expect(elem).toMatchSnapshot();
});