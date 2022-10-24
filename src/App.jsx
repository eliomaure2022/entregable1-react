import { useState } from 'react'
import quotes from './quotes.json'
import './App.css'
import QuoteBox from './Components/QuoteBox'
import Button from './Components/Button'


function App() {
  const [index, setIndex]=useState(Math.floor(Math.random() * quotes.length))
  const changeText=()=>{
   setIndex( Math.floor(Math.random() * quotes.length));
  }

  const colors = [
    '#845AEC',
    '#5AC3EC',
    '#A3EC5A',
    '#EC5AB6',
    '#EC5A5C',
    '#C2EC5A',
    '#5A68EC',
    '#EC5AC0',
    '#5A6DEC',
    '#5AB9EC',
  ]
  const changeColor= Math.floor(Math.random() * colors.length);
  document.body.style=`background: ${colors[changeColor]} `
  
  
  return (
    <div className="App" style={{color:colors[changeColor]}}>
      <QuoteBox index ={index} changeText={changeText} />
    </div>
  )
}


export default App

      
