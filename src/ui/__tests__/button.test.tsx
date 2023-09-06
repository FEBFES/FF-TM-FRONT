import React from 'react';
import { Button } from '../button/button';
import renderer from 'react-test-renderer';

describe('<Button />', () => {
  it('SNAPSHOTS: UI - Button component - render', () => {
    const elem = renderer.create(<Button />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Button (Loaded: true) component - render', () => {
    const elem = renderer.create(<Button load={true} />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Button (variant - primary) component - render', () => {
    const elem = renderer
      .create(<Button variant="primary" load={true} />)
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Button (variant - submit) component - render', () => {
    const elem = renderer.create(<Button variant="submit" />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Button (variant - danger) component - render', () => {
    const elem = renderer.create(<Button variant="danger" />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Button (variant - secondary) component - render', () => {
    const elem = renderer.create(<Button variant="secondary" />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Button (btnType - primary) component - render', () => {
    const elem = renderer.create(<Button btnType="primary" />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Button (btnType - close) component - render', () => {
    const elem = renderer.create(<Button btnType="close" />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
