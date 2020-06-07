import React, { useState } from 'react'
import { ColorHex } from './ColorHex'
import { hexArray } from '../helper/helper'
import { getRandom } from '../helper/helper'
import './App.scss'


const App = () => {
  
  const [background, setBackground] = useState('ffffff')
  const [color, setColor] = useState('#252525')

  const changeValueHandler = (indexItem, value) => {    
    value >= hexArray.length - 1 ? value = 0 : value++
    const newBg = background.split('').map((item,index) => index === indexItem ? hexArray[value] : item).join('')
    setBackground(newBg)
  }
  
  const changeColorHandler = () => {
    color === '#252525' ? setColor('#e5e5e5') : setColor('#252525')
  }
  
  const randomBackgroundHandler = () => {
    const randomBg = background.split('').map(() => hexArray[getRandom(hexArray.length)]).join('')
    setBackground(randomBg)
  }
  
  return (
    <div className='App' style={{background: `#${background}`}}>
      <div className='container' style={{color: `${color}`}}>
        <h1>Background color hex</h1> 
        <div className='colors' >
          {background.split('').map((item,index) => {
            return <ColorHex 
            key={index} 
            index={index} 
            item={item} 
            changeValueHandler={changeValueHandler} 
            />
          })}
        </div>
          
        <button 
        className='button' 
        onClick={() => changeColorHandler()}>
          Change Color
        </button>
        <button 
        className='button' 
        onClick={() => randomBackgroundHandler()}
        >
          Random Background
        </button>
        
      </div>
    </div>
  )
}

export default App
