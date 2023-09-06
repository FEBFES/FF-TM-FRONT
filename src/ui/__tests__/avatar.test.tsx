import React from 'react';
import {Avatar} from '../avatar/avatar';
import renderer from 'react-test-renderer';

it('SNAPSHOTS: UI - Avatar component - render', () => {
    const elem = renderer.create(<Avatar />).toJSON();
    expect(elem).toMatchSnapshot();
});