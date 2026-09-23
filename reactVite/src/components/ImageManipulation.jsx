import React from 'react'
import cat from './cat.jpg'
import { useState } from 'react'
function ImageManipulation() {
    const[catHeight,setCatHeight]=useState(200)
    const[catwidth,setCatwidth]=useState(200)

    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);

    function IncreaseHeight(){
      setCatHeight(catHeight+10); 
    }
    function DecreaseHeight(){
        setCatHeight(catHeight-10);
    }
    function IncreaseWidth(){
        setCatwidth(catwidth+10);
    }
    function DecreaseWidth(){
        setCatwidth(catwidth-10);
    }
    function Red(){
        setRed(255)
        setGreen(0)
        setBlue(0)
    }
    function Green(){
        setRed(0)
        setGreen(255)
        setBlue(0)
    }
    function Blue (){
        setBlue(255)
        setGreen(0)
        setRed(0)
    }
    function ChangeBgColor(){
        setRed(Math.random()*255)
        setGreen(Math.random()*255)
        setBlue(Math.random()*255)
    }
  return (
    <div>
    <h2> Image Manipulation</h2>
    <div style={{ backgroundColor:`rgb(${red},${green},${blue})`,border :"2px solid red", width:"200px",height:"300px",display:"Center"}}>
    <img src={cat} height={catHeight} width={catwidth} ></img>
    </div>
    <div>
        <button onClick={IncreaseHeight}>Increase Height</button>
        <button onClick={IncreaseWidth}>Increase Width</button>
        <button onClick={DecreaseHeight}>Decrease Height</button>
        <button onClick={DecreaseWidth}>Decrease Width</button>
        <button onClick={Red}>Red</button>
        <button onClick={Green}>Green</button>
        <button onClick={Blue}>Blue</button>
        <button onClick={ChangeBgColor}>Random</button>
    </div>  
    </div>

  )
}

export default ImageManipulation