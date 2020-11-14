import React from 'react';
import renderer from 'react-test-renderer';
import OverlayBackground from './OverlayBackground';

it('renders OverlayBackground correctly', () => {
    const tree = renderer.create(<OverlayBackground />).toJSON();
    expect(tree).toMatchSnapshot();
});