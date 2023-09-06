import React from 'react';
import {Modal} from '../modal/modal';
import renderer from 'react-test-renderer';

it('SNAPSHOTS: UI - Modal (show) component - render', () => {
    const elem = renderer.create(<Modal setShow={() => {}} show={true}>
        <div>modal</div>
    </Modal>).toJSON();
    expect(elem).toMatchSnapshot();
});