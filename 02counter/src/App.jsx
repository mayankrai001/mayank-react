import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () =>{
    // console.log("value added" , Math.random());
    // counter++;
    // console.log(counter)

    if(counter<= 20){
      setCounter(counter + 1)
    }
    else{
      alert("Counter value should be less than 20")
    }
  }

  const decreaseValue = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
    else{
      alert("Counter value should be greater than 0")
    }
  }



  return (
    <>
      <h1>Mayank is learning React</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick = {addValue}>
        Add value</button>
      <br></br>
      <button onClick ={decreaseValue}> 
      Decrease Value</button>
    </>
  )
}

export default App
