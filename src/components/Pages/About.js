import React from 'react'

export default function About ({ changeRoute }) {
  function handleChangeRoute (e) {
    e.preventDefault()
    changeRoute(e.target.pathname)
  }

  return (
    <div className='page'>
      <nav>
        <a href='/' onClick={handleChangeRoute}>Home</a>
        <a href='/about' onClick={handleChangeRoute}>About</a>
      </nav>

      <h1>About</h1>
    </div>
  )
}
