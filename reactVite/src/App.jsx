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
import FetchProduct from './components/FetchProduct'
import Dasboard from './components/Dasboard'
import Login from './components/Login'
import Registration from './components/Registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Registration/>}></Route>
        </Route>
       
        <Route path='/dashboard' element={<Dasboard/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App