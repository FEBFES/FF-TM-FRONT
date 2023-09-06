import React from 'react';
import { Link } from '../link/link';
import renderer from 'react-test-renderer';

it('SNAPSHOTS: UI - Link component - render', () => {
  const elem = renderer.create(<Link>linka</Link>).toJSON();
  expect(elem).toMatchSnapshot();
});
