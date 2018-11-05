import React from 'react'
import { mount } from 'enzyme'
import About from './About'

it('includes the title', () => {
  expect(mount(<About />)).toIncludeText('About')
})

it('changes route when clicking link', () => {
  const changeRoute = jest.fn()
  const page = mount(<About changeRoute={changeRoute} />)
  page.find('a[href="/"]').simulate('click')
  expect(changeRoute).toHaveBeenCalled()
})
