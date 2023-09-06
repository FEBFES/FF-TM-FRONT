import React from 'react';
import {Breadcrumbs} from '../breadcrumbs/breadcrumbs';
import renderer from 'react-test-renderer';

it('SNAPSHOTS: UI - Breadcrumbs component - render', () => {
    const items = [{href: '/', title: 'home'}, {href: '/profile', title: 'profile'}]
    const elem = renderer.create(<Breadcrumbs items={items}/>).toJSON();
    expect(elem).toMatchSnapshot();
});