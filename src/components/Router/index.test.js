import React from 'react'
import { mount } from 'enzyme'
import Router from './'

const Home = ({ changeRoute }) => <button onClick={() => changeRoute('/about')}></button>
const About = () => <div />

it('renders / by default', () => {
  const routes = { '/': Home }
  const window = { location: { pathname: '/' } }
  const page = mount(<Router routes={routes} window={window} />)
  expect(page).toContainMatchingElement(Home)
})

it('renders / by default', () => {
  const routes = { '/': Home, '/about': About }
  const window = { location: { pathname: '/about' } }
  const page = mount(<Router routes={routes} window={window} />)
  expect(page).toContainMatchingElement(About)
})

it('updates document title when changing route', () => {
  const routes = { '/': Home, '/about': About }
  const window = {
    location: { pathname: '/' },
    history: { pushState: () => null }
  }
  const page = mount(<Router routes={routes} window={window} />)
  page.find('button').simulate('click')
  expect(document.title).toEqual('/about')
})

it('pushes statw when changing route', () => {
  const routes = { '/': Home, '/about': About }
  const pushState = jest.fn()
  const window = {
    location: { pathname: '/' },
    history: { pushState }
  }
  const page = mount(<Router routes={routes} window={window} />)
  page.find('button').simulate('click')
  expect(pushState).toHaveBeenCalledWith({}, '/about', '/about')
})
