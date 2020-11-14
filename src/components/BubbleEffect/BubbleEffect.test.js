import React from 'react';
import renderer from 'react-test-renderer';
import BubbleEffect from './BubbleEffect';

it('renders BubbleEffect correctly', () => {
    const tree = renderer.create(<BubbleEffect />).toJSON();
    expect(tree).toMatchSnapshot();
});