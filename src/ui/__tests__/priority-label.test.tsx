import React from 'react';
import { PriorityLabel } from '../priority-label/priority-label';
import renderer from 'react-test-renderer';

describe('<PriorityLabel />', () => {
  it('SNAPSHOTS: UI - PriorityLabel (null) component - render', () => {
    const elem = renderer.create(<PriorityLabel priority={null} />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - PriorityLabel (LOW) component - render', () => {
    const elem = renderer.create(<PriorityLabel priority={'LOW'} />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - PriorityLabel (MEDIUM) component - render', () => {
    const elem = renderer
      .create(<PriorityLabel priority={'MEDIUM'} />)
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - PriorityLabel (HIGH) component - render', () => {
    const elem = renderer.create(<PriorityLabel priority={'HIGH'} />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - PriorityLabel (string) component - render', () => {
    const elem = renderer
      .create(<PriorityLabel priority={'asdasd'} />)
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
