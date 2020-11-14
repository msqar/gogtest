import React from 'react';
import renderer from 'react-test-renderer';
import CartItem from './CartItem';

const mockedItem = {
    thumbnail: '/images/game_thumbnail_1.png',
    price: 9.99,
    title: 'Some Game Title'
};

it('renders Cart correctly', () => {
    const tree = renderer.create(<CartItem item={mockedItem} />).toJSON();
    expect(tree).toMatchSnapshot();
});