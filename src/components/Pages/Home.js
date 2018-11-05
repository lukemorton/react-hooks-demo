import React, { useState } from "react"

export default function Home ({ changeRoute }) {
  const [count, updateCount] = useState(0)
  const [name, setName] = useState('No name')

  function handleNameChange (e) {
    setName(e.target.value)
  }

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

      <input
        value={name}
        onChange={handleNameChange}
        />

      <button onClick={() => updateCount(c => c - 1)}>Decrement</button>
      <button onClick={() => updateCount(c => c + 1)}>Increment</button>
    </div>
  )
}
