import React from 'react';
import {TaskLabel} from '../task-label/task-label';
import renderer from 'react-test-renderer';

describe('<Button />', () => {
    it('SNAPSHOTS: UI - TaskLabel (null) component - render', () => {
        const elem = renderer.create(<TaskLabel type={null} />).toJSON();
        expect(elem).toMatchSnapshot();
    });
    it('SNAPSHOTS: UI - TaskLabel (NONE) component - render', () => {
        const elem = renderer.create(<TaskLabel type={'NONE'} />).toJSON();
        expect(elem).toMatchSnapshot();
    });
    it('SNAPSHOTS: UI - TaskLabel (QUESTION) component - render', () => {
        const elem = renderer.create(<TaskLabel type={'QUESTION'} />).toJSON();
        expect(elem).toMatchSnapshot();
    });
    it('SNAPSHOTS: UI - TaskLabel (RESEARCH) component - render', () => {
        const elem = renderer.create(<TaskLabel type={'RESEARCH'} />).toJSON();
        expect(elem).toMatchSnapshot();
    });
    it('SNAPSHOTS: UI - TaskLabel (BUG) component - render', () => {
        const elem = renderer.create(<TaskLabel type={'BUG'} />).toJSON();
        expect(elem).toMatchSnapshot();
    });
    it('SNAPSHOTS: UI - TaskLabel (FEATURE) component - render', () => {
        const elem = renderer.create(<TaskLabel type={'FEATURE'} />).toJSON();
        expect(elem).toMatchSnapshot();
    });
})