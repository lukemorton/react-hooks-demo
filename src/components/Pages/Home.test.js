import React from 'react'
import { mount } from 'enzyme';
import Home from './Home'

it('includes the title', () => {
  expect(mount(<Home />)).toIncludeText('Home')
})

it('changes route when clicking link', () => {
  const changeRoute = jest.fn()
  const page = mount(<Home changeRoute={changeRoute} />)
  page.find('a[href="/"]').simulate('click')
  expect(changeRoute).toHaveBeenCalled()
})
