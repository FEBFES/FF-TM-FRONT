import React from 'react';
import { Text } from '../text/text';
import renderer from 'react-test-renderer';

it('SNAPSHOTS: UI - Text component - render', () => {
  const elem = renderer.create(<Text>linka</Text>).toJSON();
  expect(elem).toMatchSnapshot();
});
