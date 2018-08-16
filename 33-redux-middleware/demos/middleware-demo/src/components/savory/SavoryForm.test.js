import React from 'react';
import {shallow, mount} from 'enzyme';
import SavoryForm from './SavoryForm';

it('renders without crashing', () => {
  shallow(<SavoryForm buttonText="foo" onComplete={()=>{}} />);
});

it('supplies form data on complete', () => {
  const onComplete = jest.fn();
  const wrapper = mount(<SavoryForm buttonText="foo" onComplete={onComplete} />);
  wrapper.find('input').simulate('change', { target: { value: 'Hello', name: 'name' } })
  expect(wrapper.find('input').instance().value).toBe('Hello');
  wrapper.find('form').simulate('submit');
  expect(wrapper.find('button').text()).toBe('foo');
  expect(onComplete).toBeCalledWith({"name": "Hello"});
});

// NOTE: have to make tests for SweetForm which will be 99% the same
// Just doesn't seem right...