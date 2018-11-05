import React, { useState } from "react"

export default function Router ({ routes, window }) {
  const [route, changeRoute] = useState(window.location.pathname)

  function changeRouteTitleAndHistory (route) {
    document.title = route
    window.history.pushState({}, route, route)
    changeRoute(route)
  }

  const Page = routes[route] || routes['/']

  return <Page changeRoute={changeRouteTitleAndHistory} />
}
