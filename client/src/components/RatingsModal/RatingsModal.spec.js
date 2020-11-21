import React from 'react';
import { shallow } from 'enzyme';
import RatingsModal from './RatingsModal.jsx';
describe('RatingsModal', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<RatingsModal debug />);

    expect(component).toMatchSnapshot();
  });
});