import React from 'react'
import FooterPage from './FooterPage'
import FooterTemplate from './FooterTemplate'
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('<FooterTemplate />', () => {
  it('renders three <FooterTemplate /> components', () => {
    const wrapper = shallow(<FooterPage />)
    expect(wrapper.find(FooterTemplate)).to.have.lengthOf(1);
  })
})