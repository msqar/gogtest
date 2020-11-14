import React from 'react';
import renderer from 'react-test-renderer';
import GameCard from './GameCard';

const mockedItem = {
    thumbnail: '/images/game_thumbnail_1.png',
    price: 9.99,
    title: 'Some Game Title',
    status: 1
};

it('renders GameCard correctly', () => {
    const tree = renderer.create(<GameCard info={mockedItem} />).toJSON();
    expect(tree).toMatchSnapshot();
});