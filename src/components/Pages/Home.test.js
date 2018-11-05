import React from 'react'
import { mount } from 'enzyme'
import Home from './Home'

it('includes the title', () => {
  expect(mount(<Home />)).toIncludeText('Welcome')
})

it('changes route when clicking link', () => {
  const changeRoute = jest.fn()
  const page = mount(<Home changeRoute={changeRoute} />)
  page.find('a[href="/"]').simulate('click')
  expect(changeRoute).toHaveBeenCalled()
})

it('increments counter', () => {
  const changeRoute = jest.fn()
  const page = mount(<Home />)
  page.find('button').findWhere((b) => b.text() == 'Increment').simulate('click')
  expect(page).toIncludeText('You clicked 1 times!')
})

it('continues to increment counter', () => {
  const changeRoute = jest.fn()
  const page = mount(<Home />)
  const incrementButton = page.find('button').findWhere((b) => b.text() == 'Increment')
  incrementButton.simulate('click')
  incrementButton.simulate('click')
  expect(page).toIncludeText('You clicked 2 times!')
})

it('decrements counter', () => {
  const changeRoute = jest.fn()
  const page = mount(<Home />)
  page.find('button').findWhere((b) => b.text() == 'Decrement').simulate('click')
  expect(page).toIncludeText('You clicked -1 times!')
})
