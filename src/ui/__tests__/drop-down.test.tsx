import React from 'react';
import { DropDown } from '../drop-down/drop-down';
import renderer from 'react-test-renderer';

it('SNAPSHOTS: UI - DropDown component - render', () => {
  const elem = renderer
    .create(
      <DropDown show={true} setShow={() => {}}>
        <div>Hellow</div>
        <div>Hi</div>
      </DropDown>
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});
