import { useState } from 'react'
import './App.css'

const dogs = [
  { name: 'Puchi', breed: 'Chihuahua', age: 10}
]

function App() {
  const [count, setCount] = useState(0)
  console.log('count is', count)
  return (
    <>
    <h1>Hello</h1>
    <button onClick={() => setCount(count => count + 1)}>The count is {count}</button>

    <h2>Dogs</h2>
    {dogs.map((dog) => {
      return (
      <p key={dog.name}>{dog.name} is a {dog.breed} and is {dog.age} years old.</p>
      )
    })}
    {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App