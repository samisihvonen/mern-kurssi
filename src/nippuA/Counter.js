import React, { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter((count) => count + 1)
  }

  const decrease = () => {
    setCounter((count) => count - 1)
  }
  const current = () => {
    return (
      <h1 style={{ color: counter < 0 ? 'red' : 'black' }}>
        Current value: {counter}
      </h1>
    )
  }
  return (
    <div>
      {current()}
      <button className="btn" onClick={increase}>
        Plus
      </button>
      <button className="btn btn-red" onClick={decrease}>
        Minus
      </button>
    </div>
  )
}

export default Counter
