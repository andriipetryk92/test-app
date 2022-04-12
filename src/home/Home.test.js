import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home.jsx';
const component = props => <Home {...props} />;

const componentProps = {
  text: 'someText',
};

let wrapper;
describe('Home component', () => {
  beforeEach(() => {
    wrapper = shallow(component(componentProps));
  });

  afterEach(() => {
    wrapper && wrapper.unmount();
  });

  it('should render "text" prop correctly', () => {
    expect(wrapper.find('p').at(0).text())
    .toEqual(componentProps.text);
  });
});