import React from 'react';
import { Flex } from '../flex/flex';
import renderer from 'react-test-renderer';

describe('<Button />', () => {
  it('SNAPSHOTS: UI - Flex (default) component - render', () => {
    const elem = renderer
      .create(
        <Flex>
          <div>test</div>
        </Flex>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Flex (center) component - render', () => {
    const elem = renderer
      .create(
        <Flex ai={'center'} jc={'center'}>
          <div>test</div>
        </Flex>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Flex (start) component - render', () => {
    const elem = renderer
      .create(
        <Flex ai={'start'} jc={'start'}>
          <div>test</div>
        </Flex>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Flex (end) component - render', () => {
    const elem = renderer
      .create(
        <Flex ai={'end'} jc={'end'}>
          <div>test</div>
        </Flex>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Flex (between) component - render', () => {
    const elem = renderer
      .create(
        <Flex ai={'between'} jc={'between'}>
          <div>test</div>
        </Flex>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('SNAPSHOTS: UI - Flex (around) component - render', () => {
    const elem = renderer
      .create(
        <Flex ai={'around'} jc={'around'}>
          <div>test</div>
        </Flex>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
