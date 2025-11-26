import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import appStyle from './app.module.css'

function App() {
  const [td, setTd] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  function Add(){
    if (inputRef.current){
      setTd([...td, inputRef.current.value])
      inputRef.current.value = ""
    }
  }
  return(
    <>
    <h1>Todo List</h1>
    {
     td.map((todo, index) =>
      <div>
        <span className={appStyle.todo}>{todo}</span>
        <button onClick={() => setTd(td.filter((_, i)=>i !== index))}>X</button>
      </div>
    )

  }
  <div>
    <input type='text' ref={inputRef}></input>
    <button onClick={Add}>+</button>
  </div>
  </>
  )
}

export default App
