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
