import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'
import ColorChange from './components/ColorChange'
import MyState from './components/MyState'
import Name from './components/Name'
import ImageManipulation from './components/ImageManipulation'
function App() {
  return (
    <div style={{ 
      border: '2px solid black', 
      minWidth: '300px', 
      padding: '20px', 
      display: 'inline-block',
      borderRadius: '8px'
    }}>
      {/* <h2 style={{color:'red'}}>ABES Engineering College</h2>
      <ICard/>
      <p style={{textAlign:'center'}}>Name : Sakshi Pandit</p>
      <p style={{textAlign:'center'}}>Branch: CSE</p>
      <p style={{textAlign:'center'}}>Semester : V</p> */}

      {/* <MyState /> */}
      <hr style={{ margin: '15px 0' }} />
      {/* <Name/> */}
      {/* <ColorChange /> */}
      <ImageManipulation/>
    </div>
  )
}
export default App