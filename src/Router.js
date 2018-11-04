import React, { useState, useEffect } from "react"
import About from "./About"
import Home from "./Home"

export default function Router () {
  const [route, changeRoute] = useState(window.location.pathname)

  useEffect(() => {
    document.title = route
    window.history.pushState({}, route, route)
  })

  switch (route) {
    case '/about':
      return <About changeRoute={changeRoute} />
    case '/home':
    default:
      return <Home changeRoute={changeRoute} />
  }
}
