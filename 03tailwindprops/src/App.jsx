import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/temp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-red-600'>tailwind test</h1>
     <Card/>
    </>
  )
}

export default App
