import React from 'react';
import renderer from 'react-test-renderer';
import Cart from './Cart';
import { mount } from 'enzyme';

let wrapper = mount(<Cart />);

describe('basic render Card check', () => {
    test('renders cart correctly', () => {
        const tree = renderer.create(<Cart />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('it renders the cart counter', () => {
        const counter = wrapper.find('.Cart-counter');
        expect(counter.length).toBe(1);
    });
});

describe('basic Cart functionality, when dropdown is toggled', () => {
    test('should be visible', () => {
        const wrapperInstance = wrapper.instance();
        wrapperInstance.toggleCartDropdown();

        expect(wrapperInstance.state.isVisible).toBe(true);
    });

    test('cart should have is--opened class', () => {
        expect(wrapper.find('.is--opened')).toBeTruthy();
    });

    test('cart should be empty', () => {
        expect(wrapper.find('.Cart-dropdown-emptyTitle').text()).toBe('Your Cart is Empty');
    });
});

describe('when cart is toggled and product is added', () => {

    let wrapperInstance;

    beforeEach(() => {
        jest.mock("../../services/game-service", () => {
            const data = [{
                id: 1,
                thumbnail: '/images/game_thumbnail_2.png',
                title: `Oddworld: Stranger's Wrath`,
                price: 9.99,
                discount: '50%',
                status: 1
            }];

            return {
                getGameById: jest.fn(() => Promise.resolve(data))
            };
        });

        wrapperInstance = wrapper.instance();
        wrapperInstance.toggleCartDropdown();
    });

    test('should add one product', async () => {
        await wrapperInstance.onProductAdded({productId: 1});
        expect(wrapper.find('.Cart-counter').text()).toEqual('1');
    });

    test('should show $ 9.99 as total price', () => {
        const text = wrapper.update().find('.js-totalPrice').text();
        expect(text).toBe('$ 9.99');
    });
});
