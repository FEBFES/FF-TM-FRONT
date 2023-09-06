import React from 'react';
import { InputField } from '../input-field/Input-field';
import renderer from 'react-test-renderer';

it('SNAPSHOTS: UI - InputField component - render', () => {
  const elem = renderer.create(<InputField value={'asdas'} />).toJSON();
  expect(elem).toMatchSnapshot();
});
