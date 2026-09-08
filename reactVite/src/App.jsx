import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
function App() {
  const[count,setCount]=useState(0);
  return (
      <div style={{border: '2px solid black',width:'200px',height:'200px'}}>
        <h2 style={{color:'red'}}>ABES Engineering College</h2>
        <ICard/>
        <p style={{textAlign:'center'}}>Name : Sakshi Pandit</p>
        <p style={{textAlign:'center'}}>Branch: CSE</p>
        <p style={{textAlign:'center'}}>Semester : V</p>
      
      </div>
  )
}

export default App
