import React from 'react';
import {Switcher} from '../switcher/switcher';
import renderer from 'react-test-renderer';

describe('<Switcher />', () => {
    it('SNAPSHOTS: UI - Switcher (isActive) component - render', () => {
        const elem = renderer.create(<Switcher isActive={true} onClick={() => {}} />).toJSON();
        expect(elem).toMatchSnapshot();
    });

    it('SNAPSHOTS: UI - Switcher (!isActive) component - render', () => {
        const elem = renderer.create(<Switcher isActive={false} onClick={() => {}} />).toJSON();
        expect(elem).toMatchSnapshot();
    });
})