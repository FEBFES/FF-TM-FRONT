import React from 'react';
import { Confirm } from '../confirm/confirm';
import renderer from 'react-test-renderer';

it('SNAPSHOTS: UI - Confirm component - render', () => {
  const elem = renderer
    .create(
      <Confirm
        onConfirm={() => {}}
        show={true}
        setShow={() => {}}
        title={'????'}
      />
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});
