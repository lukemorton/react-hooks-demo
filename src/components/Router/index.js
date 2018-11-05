import React, { useState, useEffect } from "react"

export default function Router ({ routes }) {
  const [route, changeRoute] = useState(window.location.pathname)

  useEffect(() => {
    document.title = route
    window.history.pushState({}, route, route)
  })

  const Page = routes[route] || routes['/']

  return <Page changeRoute={changeRoute} />
}
