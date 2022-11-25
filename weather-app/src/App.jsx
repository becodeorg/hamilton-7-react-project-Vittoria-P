import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-sky-300 text-center flex-col justify-evenly p-5">
      <h1 className="text-blue-700 text-5xl p-7">Vice Weather</h1>
      <div className="card flex-col justify-evenly">
        <input type="text" placeholder="From where do you want the weather ?" className="bg-white text-gray-500 p-3"></input>
        <button onClick className="p-3">Submit</button>
      </div>
    </div>

    // Faire 5 jours pour voir donc 5 div
  )
}

export default App
