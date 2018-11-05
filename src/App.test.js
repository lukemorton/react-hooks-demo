import React from 'react'
import { mount } from 'enzyme'
import App from './App'

it('changes route when clicking link', () => {
  const page = mount(<App />)
  expect(page).toIncludeText('Welcome')
  page.find('a[href="/about"]').simulate('click')
  expect(page).toIncludeText('About us')
})
