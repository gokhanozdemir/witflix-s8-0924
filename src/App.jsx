import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const initialArr = ["Enes", "Furkan", "Ozan", "Sümeyye"]

function App() {
  const [count, setCount] = useState(0)
  const [isimler, setIsimler] = useState(initialArr)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>


      {isimler.map((isim, ind) => (
        <div key={ind}><h2>{isim}</h2></div>
      ))}

      {isimler.map((isim, ind) => {
        const isimVal = isim.toLowerCase();
        return <div key={ind}><h2>{isimVal}</h2></div>
      })}



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
      </p>
    </>
  )
}

export default App
