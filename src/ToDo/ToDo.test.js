import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ToDo from './ToDo';

describe('ToDo', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ToDo/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('renders UI as expected', () => {
        const tree = renderer.create(<ToDo/>).toJSON();
        expect(tree).toMatchSnapshot()
    })
})