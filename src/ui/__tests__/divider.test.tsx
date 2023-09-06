import React from 'react';
import {Divider} from '../divider/divider';
import renderer from 'react-test-renderer';

describe('<Divider />', () => {
    it('SNAPSHOTS: UI - Divider (col) component - render', () => {
        const elem = renderer.create(<Divider direction='col' />).toJSON();
        expect(elem).toMatchSnapshot();
    });

    it('SNAPSHOTS: UI - Divider (row) component - render', () => {
        const elem = renderer.create(<Divider direction='row' />).toJSON();
        expect(elem).toMatchSnapshot();
    });
})