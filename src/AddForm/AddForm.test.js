import React from 'react';
import AddForm from './AddForm';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

describe('AddForm', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddFrom />, div);
        ReactDOM.unmountComponentAtNode(div)
    })
    it('renderer UI as expected', () => {
        const tree = renderer.create(<AddForm/>).toJSON();
        expect(tree).toMatchSnapShot()
    })
    it('calls handleSubmit when button is clicked', () => {
        const mockFunction = jest.fn()
        const wrapper = shallow(<AddForm handleSubmit={mockFunction}/>);
        wrapper.find('button').at('one').simulate('click');
        expect(mockFunction).toHaveBeenCalled();
    })
})