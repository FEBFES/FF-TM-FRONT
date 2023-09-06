import React from 'react';
import { Tooltip } from '../tooltip/tooltip';
import renderer from 'react-test-renderer';

it('SNAPSHOTS: UI - Tooltip component - render', () => {
  const elem = renderer
    .create(
      <Tooltip title="test" placement="left">
        <div>asd</div>
      </Tooltip>
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});
