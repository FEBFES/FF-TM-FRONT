import React from 'react';
import { Select } from '../select/select';
import renderer from 'react-test-renderer';

it('SNAPSHOTS: UI - Select component - render', () => {
  const elem = renderer
    .create(
      <Select optionsArr={['test', 'test1', 'test2']} defaultValue="test" />
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});
