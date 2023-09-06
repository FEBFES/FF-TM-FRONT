import React from 'react';
import { Title } from '../title/title';
import renderer from 'react-test-renderer';

describe('<Title />', () => {
  it('SNAPSHOTS: UI - Title (h1) component - render', () => {
    const elem = renderer
      .create(
        <Title hover="underline" cursor="pointer">
          linka
        </Title>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Title (h1) component - render', () => {
    const elem = renderer.create(<Title level={'h1'}>h1</Title>).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Title (h2) component - render', () => {
    const elem = renderer.create(<Title level={'h2'}>h2</Title>).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Title (h3) component - render', () => {
    const elem = renderer.create(<Title level={'h3'}>h3</Title>).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Title (h4) component - render', () => {
    const elem = renderer.create(<Title level={'h4'}>h4</Title>).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Title (h5) component - render', () => {
    const elem = renderer.create(<Title level={'h5'}>h5</Title>).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Title (h6) component - render', () => {
    const elem = renderer.create(<Title level={'h6'}>h6</Title>).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
