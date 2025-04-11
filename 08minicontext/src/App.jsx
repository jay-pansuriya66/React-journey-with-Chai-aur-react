import './App.css'
import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React with chai and </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
