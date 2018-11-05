import React from 'react'
import Router from './components/Router'
import Pages from './components/Pages'

const routes = {
  '/': Pages.Home,
  '/about': Pages.About
}

export default function App () {
  return <Router routes={routes} window={window} />
}
