// import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders app without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('shallow renders without crashing', () => {
    shallow(<App />);
});

it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});
