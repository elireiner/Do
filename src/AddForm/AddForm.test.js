import React from 'react';
import AddForm from './AddForm';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

describe('AddForm', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddForm />, div);
        ReactDOM.unmountComponentAtNode(div)
    })
    it('renderer UI as expected', () => {
        const tree = renderer.create(<AddForm/>).toJSON();
        expect(tree).toMatchSnapShot
    })
    it('calls handleSubmit when button is clicked', () => {
        const mockFunction = jest.fn()
        const wrapper = shallow((<AddForm handleSubmit={mockFunction}/>));
        wrapper.find('form').simulate('submit');
        expect(mockFunction.mock.calls.length).toEqual(1);
    })
})