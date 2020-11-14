import React from 'react';
import renderer from 'react-test-renderer';
import Cart from './Cart';

it('renders Cart correctly', () => {
    const tree = renderer.create(<Cart />).toJSON();
    expect(tree).toMatchSnapshot();
});