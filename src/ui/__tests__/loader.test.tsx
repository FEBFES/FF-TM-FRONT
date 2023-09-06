import React from 'react';
import { Loader } from '../loader/loader';
import renderer from 'react-test-renderer';

it('SNAPSHOTS: UI - Loader component - render', () => {
  const elem = renderer
    .create(
      <div>
        <Loader size="1x" />
      </div>
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});
