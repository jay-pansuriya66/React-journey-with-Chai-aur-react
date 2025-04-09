import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const [count, setCount] = useState(0)

  let myObj = {
    username: "jeet",
    age: 25
  }

  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <Card username="chaiaurcode" price="69.99" />
      <Card username="jeet x khsuhi" price="105.99" />

    </>
  )
}

export default App
