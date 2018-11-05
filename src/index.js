import React from "react"
import ReactDOM from "react-dom"
import Router from "./components/Router"
import Pages from "./components/Pages"

import "./styles.css"

const routes = {
  '/': Pages.Home,
  '/about': Pages.About
}

function App () {
  return <Router routes={routes} />
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
