import React from 'react'
import { useState } from 'react';
function Name() {
    const[name,setName]=useState("Enter Name ");
    const[collegename,setcollegeName]=useState("Enter College Name");
  return (
    <div>
      <h2>Name:{name} </h2>
      <h2>College Name : {collegename}</h2>
      <button onClick ={()=> setName("Sakshi Pandit ")}>Update Name </button>
      <button onClick={()=>setcollegeName("ABESEC")}>Update College Name </button>
    </div>
  )
}
export default Name