import React, { useState } from 'react'

export default function Home ({ changeRoute }) {
  const [count, updateCount] = useState(0)

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

      <h1>Home</h1>

      <h2>You clicked {count} times!</h2>

      <button onClick={() => updateCount(c => c - 1)}>Decrement</button>
      <button onClick={() => updateCount(c => c + 1)}>Increment</button>
    </div>
  )
}
