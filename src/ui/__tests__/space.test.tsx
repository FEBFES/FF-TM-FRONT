import React from 'react';
import { Space } from '../space/space';
import renderer from 'react-test-renderer';

describe('<Space />', () => {
  it('SNAPSHOTS: UI - Space (col xl) component - render', () => {
    const elem = renderer
      .create(
        <div>
          <p>123</p>
          <Space size="xl" direction="col" />
          <span>asd</span>
        </div>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Space (row s) component - render', () => {
    const elem = renderer
      .create(
        <div>
          <p>123</p>
          <Space size="s" direction="row" />
          <span>asd</span>
        </div>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
