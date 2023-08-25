import React from 'react'
import './colorPicker.css'
import { useState } from 'react';
export default function ColorPicker() {
    const [color,setColor]=useState('');
    let colorPickerFun=()=>{
       var colorChosen= document.getElementById('chooseColor').value;
       setColor(colorChosen); 
       if(colorChosen===""){
        setColor(""); 
       }
    }
    const copyColor=()=>{
      var copyC=document.getElementById('chooseColor').value;
      alert("Copied color is : "+copyC);
    }
    const select=()=>{
          var selVal=document.getElementById('get').value;
          document.getElementById('chooseColor').value=selVal;
          setColor(selVal); 
    }
  return (
    <>
    <div className='mainPick'>
      <h1>Color Picker</h1>
      <p>Click on the box to choose a colour:</p>     
      <div>
         <input type='color' id='chooseColor' value={color} onChange={colorPickerFun}></input>
      </div>    
      <button type='button' id='copybtn' onClick={copyColor}>Copy</button>
      <p>or Write color code in the box</p>
      <div className='sel'>
         <input id="get" placeholder='#000000' ></input>
          &emsp;
         <button id="getbtn" onClick={select}>Get Color</button>
      </div>
    </div>     
    </>
    
  )
}
