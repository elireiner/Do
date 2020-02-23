import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import DoList from './DoList';

describe('DoList', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DoList />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('renders UI as expected', () => {
        const tree = renderer.create(<DoList />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})