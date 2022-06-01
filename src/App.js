import React from 'react'
import './App.css'
import Cars from './nippuA/Cars'
import Counter from './nippuA/Counter'

function App() {
  return (
    <div className="App">
      <header>Simple React Counter</header>
      <div className="counter">
        <Counter title="Current value" />
      </div>
      <div className="cars">
        <Cars />
      </div>
    </div>
  )
}

export default App
