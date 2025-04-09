import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  //counter is a variable which holds by default 15
  //setCounter is a function 

  // let counter = 15

  const addValue = () => {
    if (counter == 20) { }
    else {
      counter++
      console.log(`counter increased to: ${counter}`)
      setCounter(counter)
    }

  }

  const removeValue = () => {

    if (counter == 0) { }
    else {
      counter--
      console.log(`counter removed to : ${counter}`);
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2> counter values: {counter}</h2>

      <button onClick={addValue}>Add value : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value : {counter}</button>
    </>
  )
}

export default App
