import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Card from './components/card'

export function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name:"mayank",
    age:"21"
  }

  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username = "mayank" btnText = "click Me" />
      <Card username = "anushka" btnText = "visit Me"/>
    </>
  )
}
